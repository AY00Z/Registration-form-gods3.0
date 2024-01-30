import React from 'react'
import './RegistrationForm1.css'
import Logo from "./Vector1.png"
const RegistrationForm = () => {
    return (
        <div className='container'>

                 
            <div className="title">
                <br/>
                  <div className="all"><span className="highlight">R</span >egister</div>
                  <img  src={Logo} alt='img' />
            </div>
          

               

            <div className="cadre">
                <h1 class="quote">Ignite Your Passion: Join GODS 3.0 Today!</h1>
                <br/>  <br/>  <br/>  <br/>  


                <div className="div1">

                    <div className="input">
                        <label>Full name</label>
                        <input type='text' placeholder='enter your first name' />
                    </div>
                    
                    <div className="input">
                        <label fro>Email</label>
                        <input type='text' placeholder='enter your last name' />
                    </div>
                </div>    
                 <div className="div1">
                    <div className="input">
                        <label >Facebook Link</label>
                        <input type='email' placeholder='enter your mail adress' />
                    </div>

                    <div className="input">
                        <label fro>Phone Number</label>
                        <input type='text' placeholder='enter your phone number' />
                    </div>
                </div>

                <div className="div1">


                <div className="input">
                        <label htmlFor="status" className='status' placeholder='select your status'>Status</label>
                        <select id="status" name="status">
                            <option value="" disabled selected>Select your status</option>
                            <option value="student">Student</option>
                            <option value="graduate">Current Graduate</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>

                    <div className="input">
                        <label fro>School/Company</label>
                        <input type='text' placeholder='enter your phone number' />
                    </div>


                  

                </div>

                <div className="div1">

                    <div className="input">
                        <label>Team name</label>
                        <input type='text' placeholder='enter your first name' />
                    </div>
                    
                    <div className="input">
                        <label fro>Participants Number</label>
                        <input type='number' placeholder='enter your last name' />
                    </div>
                
                </div>

               



                
                      <br/>  <br/>  <br/>



                    <div className="checkbox">
                        <label><input type="checkbox"/> One of the team is an IEEE member</label>
                    </div>

                   



                    <div class="centerSubmit"><button className='submit'>Next</button></div>



                </div>

               
            </div>
            
            )
}

            export default RegistrationForm 