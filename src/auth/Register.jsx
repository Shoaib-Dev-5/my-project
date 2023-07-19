import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/Client';
import { useState } from 'react';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  console.log("user",user?.user);
  return (
    <div>
      <div>
        <h3>I already have an account</h3>
        <p>Sign in with your email and password</p>
      </div>
      <div>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </div>
      <div>
        <button onClick={() => createUserWithEmailAndPassword(email, password)}>Sign In</button>
        <button>Google SignIn</button>
      </div>
    </div>
  );
};

export default Register;
