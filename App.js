/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import Home from './screens/home';
import Login from './screens/login';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 48px 24px 24px;
`;

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(newUser) {
    setUser(newUser);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <SafeAreaView>
      <Container>{user ? <Home /> : <Login />}</Container>
    </SafeAreaView>
  );
};

export default App;
