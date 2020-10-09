import React from 'react';
import {Button, View} from 'react-native';
import styled from 'styled-components/native';
import {Bar} from 'react-native-progress';
const Container = styled.View`
  height: 100%;
  align-items: center;
`;

const Heading = styled.Text`
  font-size: 32px;
`;

const LogoutButtonContainer = styled.View`
  margin-top: auto;
`;

const StyledBar = styled(Bar)`
  transform: rotate(-90deg);
  margin-top: 250px;
`;

const DrinkButtonContainer = styled.View`
  margin-top: 220px;
`;

const HomeComponent = ({handleLogout, handleHydrate, progress}) => (
  <Container>
    <Heading>Hydrate</Heading>

    <View>
      <StyledBar progress={progress} width={400} height={20} useNativeDriver />
    </View>

    <DrinkButtonContainer>
      <Button title="Drink water" onPress={handleHydrate} />
    </DrinkButtonContainer>
    <LogoutButtonContainer>
      <Button title="Log out" onPress={handleLogout} />
    </LogoutButtonContainer>
  </Container>
);

export default HomeComponent;
