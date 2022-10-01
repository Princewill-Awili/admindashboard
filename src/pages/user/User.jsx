import './user.css'
import { Link } from "react-router-dom"


import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';

const User = () => {
  return (
    <div className='user'>

        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newuser">
                <button className="userAddButton">Create</button>
            </Link>  
        </div>

        <div className="userContainer">
            <div className="userShow">

                <div className="userShowTop">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZygFL992LuaxJlp6tpZLOMi01DZnFMrkzEiY4FlceaKhorAbYVjHJXqoNsrQFJsfhGA&usqp=CAU" alt="" className="userShowImg" />

                    <div className="userShowTopTitle">
                        <span className="userShowUsername">John Snow</span>
                        <span className="userShowUserTitle">Web Developer</span>
                    </div>
                </div>

                <div className="userShowBottom">

                    <span className="userShowTitle">Account Details</span>

                    <div className="userShowInfo">
                        <PermIdentityIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">johnsnow92</span>
                    </div>

                    <div className="userShowInfo">
                        <CalendarTodayIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">30.6.1992</span>
                    </div>

                    <span className="userShowTitle">Contact Details</span>

                    <div className="userShowInfo">
                        <PhoneAndroidIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">+233 845 2334</span>
                    </div>

                    <div className="userShowInfo">
                        <MailOutlineIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">johnsnow@gmail.com</span>
                    </div>

                    <div className="userShowInfo">
                        <LocationSearchingIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">Lagos | Nigeria.</span>
                    </div>

                    
                    

                </div>

            </div>

            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>

                <form className="userUpdateForm">

                    <div className="userUpdateLeft">

                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='John Snow' className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='John Snow' className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='johnsnow@gmail.com' className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='Phone Number' className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Enter Address' className="userUpdateInput" />
                        </div>

                    </div>

                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZygFL992LuaxJlp6tpZLOMi01DZnFMrkzEiY4FlceaKhorAbYVjHJXqoNsrQFJsfhGA&usqp=CAU" alt="" className="userUpdateImg" />
                            <label htmlFor="file">
                                <PublishIcon className="userUpdateIcon"/>
                            </label>
                            <input type="file" id='file' style={{display:"none"}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                    
                </form>
            </div>
        </div>


    </div>
  )
}

export default User