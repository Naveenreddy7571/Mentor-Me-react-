import './DownContent.css'
import logo from '../../images/pro.png'


function FriendRequest(){
    return(
            <div className="feed">
                <div className="card-container">
                    <div className="card">
                        <img className="profile-pic" src={logo} alt="Profile Picture"/>
                        <div className="name">Sreeram</div>
                        <div className="btn-container">
                            <button className="btn accept">Accept</button>
                            <button className="btn delete">Delete</button>
                        </div>
                    </div> 
                    <div className="card">
                        <img className="profile-pic" src={logo} alt="Profile Picture"/>
                        <div className="name">Mahasai </div>
                        <div className="btn-container">
                            <button className="btn accept">Accept</button>
                            <button className="btn delete">Delete</button>
                        </div>
                    </div> 
                    <div className="card">
                        <img className="profile-pic" src={logo} alt="Profile Picture"/>
                        <div className="name">Hari</div>
                        <div className="btn-container">
                            <button className="btn accept">Accept</button>
                            <button className="btn delete">Delete</button>
                        </div>
                    </div> 
                    <div className="card">
                        <img className="profile-pic" src={logo} alt="Profile Picture"/>
                        <div className="name">Naveen</div>
                        <div className="btn-container">
                            <button className="btn accept">Accept</button>
                            <button className="btn delete">Delete</button>
                        </div>
                    </div> 
                    <div className="card">
                        <img className="profile-pic" src={logo} alt="Profile Picture"/>
                        <div className="name">Naseer</div>
                        <div className="btn-container">
                            <button className="btn accept">Accept</button>
                            <button className="btn delete">Delete</button>
                        </div>
                    </div> 
                    <div class="card">
                        <img className="profile-pic" src={logo} alt="Profile Picture"/>
                        <div className="name">Abdul</div>
                        <div className="btn-container">
                            <button className="btn accept">Accept</button>
                            <button className="btn delete">Delete</button>
                        </div>
                    </div> 

                </div>
                        
            </div>
      
 ) }

export default FriendRequest