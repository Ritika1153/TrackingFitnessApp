/** @format */


import React from "react";
import StudentAnnouncements from "./StudentAnnoucements";//import MainScreenStudent from "./src/screens/MainScreenStudent";
import StudentProfileScreen from "./StudentProfileScreen";
import Settings from "./Settings";
import Home from "./Home";
import HomeScreen from "./HomeScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
//import Icon from "react-native-ico-material-design";
//import { NavigationContainer } from "@react-navigation/native";
import  {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
function MainScreenStudent(){
	const Tab = createMaterialBottomTabNavigator();

	  return (
		
			<Tab.Navigator
				initialRouteName='HomeScreen'
				activeColor='#fff'
				inactiveColor='#3e2465'
				barStyle={{ backgroundColor: "#9b10c2" }}>
				<Tab.Screen
					name='HomeScreen'
					component={HomeScreen}
					options={{
						headerShown: false,
						tabBarLabel: "Home",
						tabBarIcon: ({ color }) => (
							<Ionicons name='home-outline' color={color} size={25} />
						),
					}}
				/>
				<Tab.Screen
					name='StudentProfileScreen'
					component={StudentProfileScreen}
					options={{
						tabBarLabel: "Profile",
	
						tabBarIcon: ({ color }) => (
							<Ionicons name='person-outline' color={color} size={25} />
						),
					}}
				/>
				<Tab.Screen
					name='Announcements'
					component={StudentAnnouncements}
					options={{
						headerShown: true,
						// headerStyle: {
						// 	backgroundColor: "black",
						// },
						// headerTintColor: "black",
						tabBarLabel: "Announcements",
						tabBarIcon: ({ color }) => (
							<Ionicons name='notifications-outline' color={color} size={25} />
						),
					}}
				/>
				<Tab.Screen
					name='Home'
					component={Home}
					options={{
						headerShown: false,
						tabBarLabel: "Gyms",
						tabBarIcon: ({ color }) => (
							<Ionicons name='barbell-outline' color={color} size={25} />
						),
					}}
				/>
				<Tab.Screen
					name='settings'
					component={Settings}
					options={{
						headerShown: false,
						tabBarLabel: "Settings",
						tabBarIcon: ({ color }) => (
							<Ionicons name='cog-outline' color={color} size={25} />
						),
					}}
				/>
			</Tab.Navigator>
		);
	  
	}
  
export default MainScreenStudent;
