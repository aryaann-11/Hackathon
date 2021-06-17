import React from 'react';
// import EmailIcon from '@material-ui/icons/Email';
import './userprofile.css'
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    
  },
}));



const UserProfile = () => {
  const classes = useStyles();
  return (
    <>
      <section className="pb-4">
        <div className="container mt-4 profile">
          <div className="row basicInfo">
            <div className="col-2">
              <div className="userAvatar" >
                <Avatar className={classes.root} src="/static/images/avatar/1.jpg">
                  <PersonIcon/>
                </Avatar>
              </div>
            </div>
            <div className="col-7 userInfo">
              <div className="userName">
                <h5>Nirmayi Kelkar</h5>
              </div>
              <div className="userEmail pt-2"> 
                <p><i class="fas fa-envelope"></i> nimu.kelkar@gmail.com</p>
                <p><i class="fas fa-phone-square-alt"></i> +91 7774084610</p>
              </div>
              
            </div>
            <div col-3>
              <button className="editButton">Edit <i class="fas fa-user-edit"></i></button>
            </div>
          </div>

          <hr></hr>
          <h5 className="heading">Account Settings</h5>
          <div className="row accSetting">
            
            <div className="col-4">
              <div className="password">
                <p>Password</p> <br></br>
                <button className="editButton">Change Password</button>
              </div>
            </div>
            <div className="col-4">
              <div className="password">
                <p>Drives Registration link</p>     
                <h5 className="driveLink"><a>http://github.com</a></h5>        
              </div>
            </div>
            <div className="col-4">
              <div className="timeZone">
                <p>Timezone <i class="far fa-clock"></i></p>
                <h5>Asia/Calcutta</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="coverPic">
                <p>Cover Pic</p>
                <div>
                  <button className="editButton">Upload Cover Pic</button>
                </div>
              </div>
            </div>

          </div>

          <hr></hr>
          <h5  className="heading">Social Media Accounts</h5> 
          <div className="row socialAcc">
    
            <div className="col-4">
              <div className="link">
                <p>FB page link</p>
                <h5>Every Transaction</h5>
              </div>
            </div>

            <div className="col-4">
              <div className="link">
                <p>Twitter Profile</p>
                <h5>NA</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="link">
                <p>LinkedIn Profile</p>
                <h5>NA</h5>
              </div>
            </div>

            
          </div>

          <hr></hr>
          <h5  className="heading">Communication Settings</h5> 
          <div className="row commSetting">
    
            <div className="col-4">
              <div className="password">
                <p>Email notification frequency</p>
                <div>
                  <h5>Every Transaction</h5>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="link" >
                <p>Support Email Id</p>
                <h5>NA</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="sppPhone">
                <p>Support Phone Number</p>
                <h5>NA</h5>
              </div>
            </div>

            
          </div>
        

        </div>
      </section>
    </>
  )
}

export default UserProfile