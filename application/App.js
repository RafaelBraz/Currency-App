import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Quote from './src/pages/quote/';
import Conversor from './src/pages/conversor';
import Analytic from './src/pages/analytic';

import FAB from './src/components/FAB';
import Modal from './src/components/Modal';

const Tab = createMaterialTopTabNavigator();

const barStyle = {
  activeTintColor: '#676CFB',
  inactiveTintColor: '#BCBCBC',
  indicatorStyle: { backgroundColor: '#676CFB' },
}

const App = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const changeModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={barStyle}>
        <Tab.Screen name="Quote" component={Quote} />
        <Tab.Screen name="Conversor" component={Conversor} />
        <Tab.Screen name="Analytic" component={Analytic} />
      </Tab.Navigator>
      
      {
        modalVisibility?
        <Modal />
        : null
      }
      <FAB changeModalVisibility={changeModalVisibility} />

    </NavigationContainer>
  );
};

export default App;