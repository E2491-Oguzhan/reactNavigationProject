// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import {First, Second} from './pages';
import {TimeLine, Post, Friends} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
{
  /**
  const First = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>First</Text>
    </View>
  );
};
const Second = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Second</Text>
    </View>
  );
};

*/
}

/**      TabNavigator(TAB)
 * *         -Friends
 * *         -MainComponent(STACK)
 *  ?          - MainPage
 *  ?          - PostPage
 */

function MainComponent() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={TimeLine} name="MainPage" />
      <Stack.Screen
        component={Post}
        name="PostPage"
        // options={{title: 'Hello'}}
      />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainComponentPage"
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'green',
        }}>
        <Tab.Screen
          name="Friends"
          component={Friends}
          options={{title: 'Arkadaşlar'}}
        />
        <Tab.Screen
          name="MainComponentPage"
          component={MainComponent}
          options={{title: 'Ana Sayfa'}}
        />
        {/* <Tab.Screen
          name="PostPage"
          component={Post}
          options={{title: 'Gönderiler'}}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

{
  /**
  const Router = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="FirstPage" component={First} />
          <Stack.Screen name="SecondPage" component={Second}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
*/
}

export default Router;
