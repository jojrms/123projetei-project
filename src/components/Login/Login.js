import './Login.css'

export default function Login(){

    return(
        <>
            <section>
                <h1>Welcome Back</h1>
                <h2>Continue with Google or enter your details to <br/> get sign in to your account</h2>
                <button>
                <img src="https://img.icons8.com/color/24/000000/google-logo.png"/>
                    <p>Log in with Google</p>
                </button>
                <span>
                    <div>
                        <p>or</p>    
                    </div>
                </span>

                <form>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <button>Forgot password</button>
                    <input type='submit' id='btn-login' value='Log in' placeholder='Log in'/>
                </form>
            </section>
            <section>
                <i/>
                <p>Copyrigth @room 2022 | <a>Privacy Policy</a></p>
            </section>
        </>
    )
}