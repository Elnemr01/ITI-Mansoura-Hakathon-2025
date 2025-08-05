import React from 'react';
import './pageStyle/loginprofile.css';


 const Profile = () => {
  return (
      <div className="profile-card">
       
        <div className="profile-info">

          <img src="src/assets/assets_frontend/upload_area.png" alt="profile" />
          <h2>SAMEH</h2>
          <hr/>

           <div className="contactinfo">
            <h3>CONTACT INFORMATION</h3>
                      <p className="Email"> Email id: <span> ahmedmostafa@gmail.com</span></p>
                      <p className="phone">Phone:<span> 000000000000</span> </p>
                       <p className="address">Address:</p>
           </div>

           <div className="basicinfo">
            <h3>BASIC INFORMATION</h3>
                      <p className="gender">Gender:<span>Not Selected</span></p>
                      <p className="gender">Berthday:<span>Not Selected</span></p>

           </div>
          <button className="edit-button">Edit</button>
        </div>
      </div>
    
  );
};

export default Profile;
