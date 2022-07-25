import React from 'react';
import '../css/pages/indexpage.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import AppleSignin from 'react-apple-signin-auth';
import {faApple} from "@fortawesome/free-brands-svg-icons/faApple";


function IndexPage(props) {

    function handleSuccess(e) {
        console.log(e)


    }

    function handleError(e) {
        console.log(e)
    }

    return (
        <>        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>

            <section className={"indexpage"}>
                <div className={"whats-happening"}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="twit-logo ">
                        <g>
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                        </g>
                    </svg>
                </div>
                <main className={"login-reg-form"}>
                    <FontAwesomeIcon icon={faTwitter} className={" text-5xl text-gray-300 "}
                                     style={{alignSelf: "flex-start"}}/>
                    <h1 className={"font-bold text-7xl mb-5"}>Happening Now</h1>
                    <h3 className={"font-bold text-4xl"}>Join Twitter Today</h3>
                    <div className={"login-signup"}>
                        <GoogleLogin
                            shape={"pill"}
                            onSuccess={handleSuccess}
                            onError={handleError}
                            text={"signup_with"}

                        />
                        <AppleSignin
                            render={(props) => <button className={"rounded-3xl p-2 border border-white"}  {...props}>
                                <FontAwesomeIcon icon={faApple}/> Sign Up with Apple</button>}></AppleSignin>
                        <div className={'flex gap-2 '}>
                            <div className="hr-s w-1/2 bg-gray-400 self-center"></div>
                            or
                            <div className="hr-s w-1/2 bg-gray-400 self-center"></div>
                        </div>
                        <a href={"#"}
                           className={'signup-wpe w-full flex justify-center p-3  bg-cyan-600 rounded-3xl '}> sign
                            up with
                            phone or email</a>
                        <div className={'text-[11px] mb-4'}> By signing up, you agree to the Terms of Service and
                            Privacy
                            Policy, including Cookie Use.
                        </div>

                        <div className={"text-[1.4rem] font-semibold"}>Already have an account ?</div>

                        <a href="#"
                           className="signin-btn flex p-3 rounded-3xl w-[300px] justify-center text-cyan-600 font-semibold border border-gray-400">Sign
                            In</a>

                    </div>


                </main>
            </section>
            <nav className={'nav-b flex bg-black text-white text-sm justify-around p-4'}>
                <p>About</p>
                <p>Help Center</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Accessibility</p>
                <p>Ads info</p>
                <p>Blog</p>
                <p>Status</p>
                <p>Careers</p>
                <p>Brand Resources</p>
                <p>Advertising</p>
                <p>Marketing</p>
                <p>Twitter for Business</p>
                <p>Developers</p>
                <p>Directory</p>
                <p>Settings</p>
                <p>© 2022 Twitter, Inc.</p>

            </nav>
        </GoogleOAuthProvider>
        </>
            );
            }

            export default IndexPage;
