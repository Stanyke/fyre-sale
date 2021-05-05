import React, {useState} from 'react'
import amazon_logo from '../images/amazon-logo.png'

function AmazonRegistrationPage() {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const handleRegistrationForm = (e) => {
        e.preventDefault()

        console.log(fullname, email, password, confirmPassword)
    }

    return (
        <div>
            <img src={amazon_logo} className="app_logo" alt="logo" />

            <div className="mainContent">

                <h1>Create account</h1>

                <form autocomplete="off" onSubmit={handleRegistrationForm}>
                    <div className="formBox">
                        <label>Your name</label>
                        <input type="text" autocomplete="off" onChange={(e) => setFullname(e.target.value) } required  />

                        <label>Email</label>
                        <input type="text" autocomplete="off" onChange={(e) => setEmail(e.target.value) } required />

                        <label>Password</label>
                        <input type="password" placeholder="At least 6 characters" autocomplete="off" onChange={(e) => setPassword(e.target.value) } required />

                        <div className="iQuote">
                            <span className="imark">&#8520;</span>
                            <span className="itext">Passwords must be at least 6 characters.</span>
                        </div>

                        <label>Re-enter password</label>
                        <input type="password" autocomplete="off" onChange={(e) => setConfirmPassword(e.target.value) } required />

                    </div>

                    <button type="submit" className="submitBtn">Create your Amazon account</button>
                </form>

                <div className="info">
                    <p className="itext">By creating an account, you agree to Amazon's <a href="#" target="_blank">Conditions of Use</a> and <a href="#" target="_blank">Privacy Notice</a>.</p>

                    <div className="optionalInfo">
                        <br/>
                        <span className="content">Already have an account?</span>
                        <a href="#" target="_blank" className="signInBtn content">Sign-In</a>
                        <span className="signInArrow">&#10148;</span>
                    </div>
                </div>

            </div>


            <div className="footer">
                <div className="content">
                    <div><a href="#" className="itext">Conditions of Use</a></div>
                    <div><a href="#" className="itext">Privacy Notice</a></div>
                    <div><a href="#" className="itext">Help</a></div>
                </div>

                <div className="smallerContent">© 1996-{currentYear}, Amazon.com, Inc. or its affiliates</div>
            </div>

        </div>
    )
}

export default AmazonRegistrationPage;