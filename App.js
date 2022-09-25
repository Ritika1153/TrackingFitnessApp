/** @format */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import TrainerSignUp from "./src/screens/TrainerSignUp";
import SignupNavigation from "./src/screens/SignupNavigation";
import TrainerProfile from "./src/screens/TrainerProfile";
import CandidateProfile from "./src/screens/CandidateProfile";
import MainScreen from "./src/screens/MainScreen";
import StudentFitnessInfo from "./src/screens/StudentFitnessInfo";
import Icon from '@expo/vector-icons';
import Announcement from "./src/screens/Announcement";
import SettingsTrainer from "./src/screens/SettingsTrainer";
import GymsList from "./src/screens/GymsList";
import { Button, Platform } from "react-native";
import CandidateDietPlan from "./src/screens/CandidateDietPlan";
import GymProfile from "./src/screens/GymProfile";
import StudentAnnouncements from "./src/screens/StudentAnnoucements";
import StudentSignUp from "./src/screens/StudentSignUp";
import NewUserExplore from "./src/screens/NewUserExplore";
import UploadVid from "./src/screens/UploadVid";
import LoginScreen from "./src/screens/LoginScreen";
import EditProfile from "./src/screens/EditProfile";
import Progress from "./src/screens/Progress";
import ChooseUser from "./src/screens/ChooseUser";
import TrainerAddStudent from "./src/screens/TrainerAddStudent";
import TrainerRatings from "./src/screens/TrainerRatings";
import BlogReadMore from "./src/screens/BlogReadMore";
import GenderScreen from "./src/screens/GenderScreen";
import MainScreenStudent from "./src/screens/MainScreenStudent";
import HomeScreen from "./src/screens/HomeScreen";
import StudentProfileScreen from "./src/screens/StudentProfileScreen";
import Details from "./src/screens/Details";
import NewAnnoucement from "./src/screens/NewAnnouncement";
import Home from "./src/screens/Home";
import SuggestDiet from "./src/screens/SuggestDiet";
import MainGoalScreen from "./src/screens/MainGoalScreen";
import TrainerPackages from "./src/screens/TrainerPackages";
import TaskSuggestion from "./src/screens/TaskSuggestion";
import TrainerNewGym from "./src/screens/TrainerNewGym";
import InviteSomeone from "./src/screens/IniviteSomeone";
import PaymentSuccessfull from "./src/screens/PaymentSuccessfull";
import RegisterGymForm from "./src/screens/RegisterGymForm";
import DietDropDown from "./src/components/DietDropDown";
import Settings from "./src/screens/Settings";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import StudentList from "./src/screens/StudentsList";

const Tab = createMaterialBottomTabNavigator();

const RootStack = createStackNavigator();

const RootStackScreenStudent = ({ navigation }) => {
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
						<Icon name='home-outline' color={color} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name='StudentProfileScreen'
				component={StudentProfileScreen}
				options={{
					tabBarLabel: "Profile",

					tabBarIcon: ({ color }) => (
						<Icon name='person-outline' color={color} size={25} />
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
						<Icon name='notifications-outline' color={color} size={25} />
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
						<Icon name='barbell-outline' color={color} size={25} />
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
						<Icon name='cog-outline' color={color} size={25} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const RootStackScreenSkip = ({ navigation }) => {
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
						<Icon name='home-outline' color={color} size={25} />
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
						<Icon name='barbell-outline' color={color} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name='Explore'
				component={NewUserExplore}
				options={{
					headerShown: false,
					tabBarLabel: "Explore",
					tabBarIcon: ({ color }) => (
						<Icon name='compass-outline' color={color} size={25} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
const RootStackScreen = ({ navigation }) => {
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
						<Icon name='home-outline' color={color} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name='TrainerProfile'
				component={TrainerProfile}
				options={{
					tabBarLabel: "My Profile",

					tabBarIcon: ({ color }) => (
						<Icon name='person-outline' color={color} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name='Announcements'
				component={Announcement}
				options={{
					headerShown: false,
					tabBarLabel: "Announcements",
					tabBarIcon: ({ color }) => (
						<Icon name='notifications-outline' color={color} size={25} />
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
						<Icon name='barbell-outline' color={color} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name='settings'
				component={SettingsTrainer}
				options={{
					headerShown: false,
					tabBarLabel: "Settings",
					tabBarIcon: ({ color }) => (
						<Icon name='cog-outline' color={color} size={25} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<RootStack.Navigator initialRouteName='SplashScreen'>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='SplashScreen'
					component={WelcomeScreen}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='TrainerSignUp'
					component={TrainerSignUp}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='StudentSignUp'
					component={StudentSignUp}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='NewAnnoucement'
					component={NewAnnoucement}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='TrainerNewGym'
					component={TrainerNewGym}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='GenderScreen'
					component={GenderScreen}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='RegisterGymForm'
					component={RegisterGymForm}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='EditProfile'
					component={EditProfile}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='ChooseUser'
					component={ChooseUser}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='BlogReadMore'
					component={BlogReadMore}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='UploadVid'
					component={UploadVid}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='TrainerRatings'
					component={TrainerRatings}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='InviteSomeone'
					component={InviteSomeone}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='TrainerAddStudent'
					component={TrainerAddStudent}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='MainGoalScreen'
					component={MainGoalScreen}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='Progress'
					component={Progress}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='StudentFitnessInfo'
					component={StudentFitnessInfo}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='DietDropDown'
					component={DietDropDown}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='Details'
					component={Details}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='LoginScreen'
					component={LoginScreen}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='CandidateDietPlan'
					component={CandidateDietPlan}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='SuggestDiet'
					component={SuggestDiet}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='SignupNavigation'
					component={SignupNavigation}
				/>
				<RootStack.Screen
					options={{
						headerShown: false,
					}}
					name='TrainerPackages'
					component={TrainerPackages}
				/>
				<RootStack.Screen
					options={{ headerShown: false }}
					name='PaymentSuccessfull'
					component={PaymentSuccessfull}
				/>
				<RootStack.Screen
					options={{ headerShown: false }}
					name='TaskSuggestion'
					component={TaskSuggestion}
				/>
				<RootStack.Screen
					options={{ headerShown: false }}
					name='MainScreen'
					component={RootStackScreen}
				/>
				<RootStack.Screen
					options={{ headerShown: false }}
					name='MainScreenStudent'
					component={RootStackScreenStudent}
				/>
				<RootStack.Screen
					options={{ headerShown: false }}
					name='MainScreenSkip'
					component={RootStackScreenSkip}
				/>
				<RootStack.Screen
					options={({ navigation, route }) => ({
						headerShown: "true",
						title: "Gyms",
						headerStyle: {
							backgroundColor: "#9b10c2",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerLeft: () => (
							<Button
								onPress={() => navigation.navigate("TrainerProfile")}
								title='Profile'
								color={Platform.OS === "ios" ? "#fff" : "#9b10c2"}
							/>
						),
					})}
					name='GymsList'
					component={GymsList}
				/>

				<RootStack.Screen
					options={({ navigation, route }) => ({
						headerShown: "true",
						title: "Your Students",
						headerStyle: {
							backgroundColor: "#9932cc",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerLeft: () => (
							<Button
								onPress={() => navigation.navigate("TrainerProfile")}
								title='Profile'
								color={Platform.OS === "ios" ? "#fff" : "#9932cc"}
							/>
						),
					})}
					name='StudentList'
					component={StudentList}
				/>
				<RootStack.Screen
					options={({ navigation, route }) => ({
						headerShown: "true",
						title: "Student Profile",
						headerStyle: {
							backgroundColor: "#9932cc",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerLeft: () => (
							<Button
								onPress={() => navigation.navigate("StudentList")}
								title='Back '
								color={Platform.OS === "ios" ? "#fff" : "#9932cc"}
							/>
						),
					})}
					name='CandidateProfile'
					component={CandidateProfile}
				/>
				<RootStack.Screen
					options={({ navigation, route }) => ({
						headerShown: "true",
						title: "Gym Details",
						headerStyle: {
							backgroundColor: "#9932cc",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerLeft: () => (
							<Button
								onPress={() => navigation.navigate("GymsList")}
								title='Back '
								color={Platform.OS === "ios" ? "#fff" : "#9932cc"}
							/>
						),
					})}
					name='GymProfile'
					component={GymProfile}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
