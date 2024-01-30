import React from 'react'
import './Form2.css'
import Logo from "./Vector1.png"
const RegistrationForm = () => {
    return (
        <div className='container2'>

                 
            <div className="title2">
                  <div className="all2"><span className="highlight2">R</span >egister</div>
                  <img  src={Logo} alt='img' />
            </div>
          

               

            <div className="cadre2">
                <h1 class="quote2">Seconnd Teammate informations</h1>
                <br/>  <br/>  <br/>  <br/>  


                <div className="div12">

                    <div className="input2">
                        <label>Full name</label>
                        <input type='text' placeholder='second teammate full name' />
                    </div>
                    
                    <div className="input2">
                        <label fro>Email</label>
                        <input type='text' placeholder='second teammate email adress' />
                    </div>
                </div>    
                 <div className="div12">
                    <div className="input2">
                        <label >Facebook Link</label>
                        <input type='email' placeholder='second teammate facebook link' />
                    </div>

                    <div className="input2">
                        <label fro>Phone Number</label>
                        <input type='text' placeholder='second teammate phone number' />
                    </div>
                </div>

                <div className="div12">


                   <div className="input2">
                        <label htmlFor="status" className='status2' placeholder='select your status'>Status</label>
                        <select id="status2" name="status">
                            <option value="" disabled selected>Select your status</option>
                            <option value="student">Student</option>
                            <option value="graduate">Current Graduate</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>

                    <div className="input2">
                        <label fro>School/Company</label>
                        <input type='text' placeholder='enter your phone number' />
                    </div>

                </div>

               

                   



                    <div class="centerSubmit2"><button className='submit2'>Next</button></div>



                </div>

               
            </div>
            
            )
}

            export default RegistrationForm 