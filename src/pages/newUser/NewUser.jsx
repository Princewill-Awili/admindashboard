import './newuser.css'

const NewUser = () => {
  return (
    <div className='newUser'>

        <h1 className="newUserTitle">New User</h1>

        <form  className="newUserForm">

            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder='Enter Username'  />
            </div>

            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder='Enter Full Name'  />
            </div>

            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder='Enter your email'  />
            </div>

            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder='Enter a unique password'  />
            </div>

            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder='Enter Phone Number'  />
            </div>

            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder='Enter your address'  />
            </div>

            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">

                    <input type="radio" id='male'  value="male"/>
                    <label for="male">Male</label>

                    <input type="radio" id='female'  value="female"/>
                    <label for="female">Female</label>

                    <input type="radio" id='others'  value="others"/>
                    <label for="others">Other</label>

                </div>
                
            </div>

            <div className="newUserItem">
                <label>Active</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <button className="newUserButton">Create</button>

        </form>
    </div>
  )
}

export default NewUser