import React from 'react'
import './Profile.css';
const Profile=()=>{
    return(
        <div className="containerProfile">
            <div className="headeru"><p>Personal Details</p><h3>Complete Your Profile</h3></div>
             <form>
             <div className="formdetails">
                  <div className="inputbox"><input type="text" name="name" id="UserName " required="true" autoComplete="off"/>
                  <label for="UserName">UserName</label></div> 
                 <div className="inputbox"><input type="number" name="ph" id="PhoneNumber" required="true" autoComplete="off"/>
                 <label for="PhoneNumber">Phone</label></div>  
                 <div  className="inputbox"><input type="text" name="FirstName"id="First Name" required="true" autoComplete="off"/>
                 <label for="First Name">FirstName</label></div>   
                 <div  className="inputbox"><input type="text" name="LastName" id="Last Name" required="true" autoComplete="off"/>
                 <label for="LastName">LastName</label></div>  
                 <div  className="inputbox"><input type="text" name="city" id="City" required="true" autoComplete="off"/>
                 <label for="City">City</label></div> 
                 <div  className="inputbox"><input type="text" name="country" id="Country" required="true" autoComplete="off"/>
                 <label for="Country">Country</label></div>  
                 </div>
                  <div className="categorya">
                    <label>Categories</label>
                    <select>
                     <option value="Music">Music</option>
                     <option value="Dance">Dance</option>
                     <option value="Comedy">Comedy</option>
                     <option value="Art">Art</option>
                 </select></div><br/> 
                 <div className="uploadaudio">
                      <label for="audio">Audio</label>
                      <input type="file" name="Audio" id="audio"/>
                  </div>
                  <div className="uploadvideo">
                      <label for="video">Video</label>
                      <input type="file" name="Video" id="video"/>

                  </div>
                 <div className="desc">
                     <label>Description</label><br/>
                 <textarea type="text" ></textarea></div>  <br/>
                    
                <button type="submit">Submit</button>

             </form>    
        </div>    
    );
}

export default Profile;