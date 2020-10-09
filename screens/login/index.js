import React, {useState} from 'react';
import LoginComponent from './Login';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    auth().signInWithEmailAndPassword(email, password);
  };

  const props = {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };

  return <LoginComponent {...props} />;
};

export default Login;
