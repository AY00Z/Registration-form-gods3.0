import React from 'react'
import './Form3.css'
import Logo from "./Vector1.png"
const RegistrationForm = () => {
    return (
        <div className='container3'>

                 
            <div className="title3">
                  <div className="all3"><span className="highlight3">R</span >egister</div>
                  <img  src={Logo} alt='img' />
            </div>
          

               

            <div className="cadre3">
                <h1 class="quote3">Third Teammate informations</h1>
                <br/>  <br/>  <br/>  <br/>  


                <div className="div13">

                    <div className="input3">
                        <label>Full name</label>
                        <input type='text' placeholder='third teammate full name' />
                    </div>
                    
                    <div className="input3">
                        <label fro>Email</label>
                        <input type='text' placeholder='third teammate email adress' />
                    </div>
                </div>    
                 <div className="div13">
                    <div className="input3">
                        <label >Facebook Link</label>
                        <input type='email' placeholder='third teammate facebook link' />
                    </div>

                    <div className="input3">
                        <label fro>Phone Number</label>
                        <input type='text' placeholder='third teammate phone number' />
                    </div>
                </div>

                <div className="div1">


                <div className="input3">
                        <label htmlFor="status" className='status3' placeholder='select your status'>Status</label>
                        <select id="status3" name="status">
                            <option value="" disabled selected>Select your status</option>
                            <option value="student">Student</option>
                            <option value="graduate">Current Graduate</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>

                    <div className="input3">
                        <label fro>School/Company</label>
                        <input type='text' placeholder='enter your phone number' />
                    </div>


                  

                </div>

               

                   


                     <br/>
                    <div class="centerSubmit3"><button className='submit3'>Next</button></div>



                </div>

               
            </div>
            
            )
}

            export default RegistrationForm 