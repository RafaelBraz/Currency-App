import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Quote from './src/Frontend/pages/quote';
import Conversor from './src/Frontend/pages/conversor';
import Analytic from './src/Frontend/pages/analytic';

import FAB from './src/Frontend/components/FAB';
import Modal from './src/Frontend/components/Modal';
import Config from './src/Frontend/components/Config';

import DataContext from './src/Datas/context';

import Constants from './src/Frontend/constants';

const Tab = createMaterialTopTabNavigator();

const barStyle = {
  activeTintColor: Constants.theme.primary,
  inactiveTintColor: Constants.theme.gray,
  indicatorStyle: { backgroundColor: Constants.theme.primary },
}

const App = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const changeModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <NavigationContainer>
      <DataContext>
        
        <Tab.Navigator tabBarOptions={barStyle}>
          <Tab.Screen name="Quote" component={Quote} />
          <Tab.Screen name="Conversor" component={Conversor} />
          <Tab.Screen name="Analytic" component={Analytic} />
        </Tab.Navigator>
        
        {
          modalVisibility?
          <Modal changeModalVisibility={changeModalVisibility}>
            <Config />
          </Modal>
          : null
        }

        <FAB changeModalVisibility={changeModalVisibility} />

      </DataContext>
    </NavigationContainer>
  );
};

export default App;