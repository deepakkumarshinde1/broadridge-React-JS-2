import { createContext, useContext, useEffect, useReducer } from "react";
import { registerUser, userLogin } from "./service/auth.service";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

let initialState = {
  loginStatus: false,
  registrationStatus: false,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "USER_REG":
      if (action.payload) {
        return { ...state, registrationStatus: true };
      }
      return { ...state };

    default:
      return { ...state };
  }
};

export function AuthContextProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let makeRegistration = async (_data) => {
    let data = await registerUser(_data);
    dispatch({ type: "USER_REG", payload: data });
  };

  let makeLogin = async (_data) => {
    let data = await userLogin(_data);
    if (data) {
      localStorage.setItem("token", data.token);
      alert("User Login Successfully");
      window.location.reload();
    } else {
      alert("wrong username or password");
    }
  };
  useEffect(() => {
    if (state.registrationStatus) {
      alert("Your registration is success");
    }
  }, [state.registrationStatus]);

  let shared = {
    makeRegistration,
    makeLogin,
  };
  return <AuthContext.Provider value={shared}>{children}</AuthContext.Provider>;
}

// controlled => state
// uncontrolled => ref
