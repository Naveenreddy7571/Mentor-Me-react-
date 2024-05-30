import Post from './Post'
import Postsarray from './PostsArr.js'
import {React,useEffect,useRef,useState} from 'react'
import PostQuestion from '../PostQueston/PostQuestion.jsx'
import RightSidebar from '../RightSideBar/RightSidebar.jsx'
function Feed({isopencomment}) {
    const [posts, setPosts] = useState(Postsarray);
    const [size, setSize] = useState(6);
    const feedRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (feedRef.current.scrollHeight - feedRef.current.scrollTop <= feedRef.current.clientHeight + 30) {
          setSize(prevSize => prevSize + 6);
        }
      };
  
      const feedElement = feedRef.current;
      feedElement.addEventListener('scroll', handleScroll);
      return () => feedElement.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      setPosts(prevPosts => [...prevPosts, ...Postsarray]);
    }, [size]);
  
  return (
    <div id="feed" className='feed' ref={feedRef}>
          <PostQuestion />
          {posts.map((dataItem, index) => (
            <Post
              props={dataItem}
              key={index}
            />
          ))}
          
        </div>
  )
}

export default Feed