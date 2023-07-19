import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Client";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  console.log("user",user);
    return (
      <div>
        <div>
          <h3>I already have an account</h3>
          <p>Sign in with your email and password</p>
        </div>
        <div>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
          <button onClick={()=>signInWithEmailAndPassword(email,password)}>Sign Up</button>
        </div>
      </div>
    );
  };
  
  export default Login;
  