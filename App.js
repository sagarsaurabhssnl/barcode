import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import search from "./screens/search";
import transaction from "./screens/transaction";
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Search" component={search} options={option.tabs} />
          <Tab.Screen name="Transaction" component={transaction} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const option = {
  tabs: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    tabBarBadge: 3
  },
};
