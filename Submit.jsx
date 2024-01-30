import React from 'react'
import './Submit.css'
import Logo from "./Vector1.png"
const RegistrationForm = () => {
    return (
        <div className='containers'>


            <div className="titles">
                <br/>
               <div className="registers"><div className="alls"><span className="highlights">R</span >egister</div></div>
                <img src={Logo} alt='img' />
            </div>



            <div className="alll">
            <div className="cadres">
                <label className='questions'>Do you have any questions ?</label> <br /><br />
                <input type="text" className='inputs' placeholder="whrite here ..."    ></input>
            </div>
            <br/>   <br/>   <br/>   
            <div class="centerSubmits"><button className='submits'>Submit</button>
            </div>
            </div>


        </div>

    )
}

export default RegistrationForm 