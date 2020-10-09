import React from 'react';
import {Button, Text} from 'react-native';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  height: 48px;
  padding: 12px;
  border-width: 1px;
  border-color: black;
  margin-bottom: 12px;
`;

const Heading = styled.Text`
  text-align: center;
  font-size: 32px;
  margin-bottom: 32px;
`;

const LoginComponent = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => (
  <>
    <Heading>Login</Heading>
    <Text>Email</Text>
    <Input
      value={email}
      onChangeText={setEmail}
      autoCompleteType="email"
      keyboardType="email-address"
      autoCapitalize="none"
    />
    <Text>Password</Text>
    <Input
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      autoCompleteType="password"
    />
    <Button title="Login" onPress={handleSubmit} />
  </>
);

export default LoginComponent;
