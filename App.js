import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';


const Stack = createStackNavigator();
const myOptionsHome = {
  title:"My motherfucker Home",
  headerTintColor: "white",
  headerStyle:{
    backgroundColor:"#006aff"
  }
}

function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      {/* <CreateEmployee/> */}
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={myOptionsHome}
        />
        <Stack.Screen
        name="CreateEmployee" 
        component={CreateEmployee}
        options={{...myOptionsHome,title:"Create employee"}}
        />
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{...myOptionsHome,title:"Profile employee"}}
        />
      </Stack.Navigator>  
      {/* <Profile/> */}
    </View>

  );
}

export default ()=>{
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: Contants.statusBarHeight,
    flex: 1,
    marginHorizontal:0,
    height:500
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: "#ff00ff",
    // marginTop:Contants.statusBarHeight
  },
  input:{
    // width:200
  }
});
