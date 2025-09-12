import { useRef, useState } from "react";
import Input from "./shared/Input";
import { useAuthContext } from "../context/auth.context";

function Auth() {
  let { makeRegistration, makeLogin } = useAuthContext();
  let [login, setLogin] = useState(false);
  let [registration, setRegistration] = useState(false);
  let userRegistration = {
    userRef: useRef(null),
    passwordRef: useRef(null),
  };

  let userLogin = {
    userRef: useRef(null),
    passwordRef: useRef(null),
  };

  let submitForm = () => {
    let { passwordRef, userRef } = userRegistration;
    let username = userRef.current.getValue();
    let password = passwordRef.current.getValue();
    userRef.current.setValue("");
    passwordRef.current.setValue("");
    userRef.current.getFocus();
    makeRegistration({
      username,
      password,
    });
  };

  let userLoginForm = () => {
    let { passwordRef, userRef } = userLogin;
    let username = userRef.current.getValue();
    let password = passwordRef.current.getValue();
    makeLogin({
      username,
      password,
    });
  };
  let closeModal = () => {
    setRegistration(false);
    setLogin(false);
  };
  return (
    <>
      <section className="user-auth">
        <button
          onClick={() => {
            setRegistration(false);
            setLogin(true);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setRegistration(true);
            setLogin(false);
          }}
        >
          Register
        </button>

        {(login || registration) && (
          <section className="pop-up">
            {registration && (
              <section className="registration modal">
                <section className="head">
                  <h2>Registration</h2>
                  <button onClick={closeModal}>Close</button>
                </section>
                <section className="body">
                  <Input
                    ref={userRegistration.userRef}
                    placeholder="Enter UserName"
                    label={"UserName"}
                  />
                  <Input
                    ref={userRegistration.passwordRef}
                    type="password"
                    placeholder="Enter Password"
                    label={"Password"}
                  />
                  <section style={{ textAlign: "center" }}>
                    <button onClick={submitForm} className="btn btn-submit">
                      Submit
                    </button>
                  </section>
                </section>
              </section>
            )}
            {login && (
              <section className="login modal">
                <section className="head">
                  <h2>Login</h2>
                  <button onClick={closeModal}>Close</button>
                </section>
                <section className="body">
                  <Input
                    ref={userLogin.userRef}
                    placeholder="Enter Username"
                    label="UserName"
                  />
                  <Input
                    ref={userLogin.passwordRef}
                    placeholder="Enter Password"
                    label="Password"
                  />
                  <section style={{ textAlign: "center" }}>
                    <button onClick={userLoginForm} className="btn btn-submit">
                      Login
                    </button>
                  </section>
                </section>
              </section>
            )}
          </section>
        )}
      </section>
    </>
  );
}

export default Auth;
