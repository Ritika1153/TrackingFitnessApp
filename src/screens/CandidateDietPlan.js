/** @format */

import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	StatusBar,
	SafeAreaView,
	Keyboard,
	ScrollView,
} from "react-native";
import React, { useState, Component } from "react";

import DietDropDown from "../components/DietDropDown";
import SearchableDropdown from "react-native-searchable-dropdown";
import Task from "../components/Task";
import left from "../../assets/icons/left.png";
// var items = [
// 	{
// 		id: 1,
// 		name: "The Paleo Diet",
// 	},
// 	{
// 		id: 2,
// 		name: "The Vegan Diet",
// 	},
// 	{
// 		id: 3,
// 		name: "Low-Carb Diets",
// 	},
// 	{
// 		id: 4,
// 		name: "The Dukan Diet",
// 	},
// 	{
// 		id: 5,
// 		name: "The Ultra-Low-Fat Diet",
// 	},
// 	{
// 		id: 6,
// 		name: "The Atkins Diet",
// 	},
// 	{
// 		id: 7,
// 		name: "The Zone Diet",
// 	},
// 	{
// 		id: 8,
// 		name: "Keto",
// 	},
// ];
// {
//     "profile":{
//         "current":160,
//         "target":150
//     },
//     "reference": [
//         {
//             "category":"exercise",
//             "type":"expenditure",
//             "activities":[
//                 {"name":"biking", "calories":550},
//                 {"name":"golf", "calories":1000},
//                 {"name":"running", "calories":650},
//                 {"name":"swimming", "calories":650},
//                 {"name":"walking", "calories":225}
//             ]
//         },
//         {
//             "category":"nutrition",
//             "type":"intake",
//             "fruit":[
//                 {"name":"apple", "calories":70},
//                 {"name":"banana", "calories":70},
//                 {"name":"orange", "calories":90},

//             ],
//             "vegetables":[
//                 {"name":"baked potato", "calories":150},
//                 {"name":"broccoli", "calories":50},
//                 {"name":"green beans", "calories":30}
//             ]
//         }
//     ],
//     "program": [
//         {
//             "category":"exercise",
//             "schedule":[
//                 {"day":"sunday", "activity":"swimming"},
//                 {"day":"monday", "activity":"running"},
//                 {"day":"tuesday", "activity":"biking"},
//                 {"day":"wednesday", "activity":"running"},
//                 {"day":"thursday", "activity":"swimming"},
//                 {"day":"friday", "activity":"running"},
//                 {"day":"saturday", "activity":"golf"}
//             ]
//         },
//         {
//             "category":"diet",
//             "schedule":[
//             ]
//         }
//     ]
// }

// const Example = () => {
// 	return (
// 		<SearchableDropdown
// 			onTextChange={(text) => {}}
// 			onItemSelect={(item) => alert(JSON.stringify(item))}
// 			containerStyle={{
// 				padding: 20,
// 			}}
// 			textInputStyle={{
// 				padding: 12,
// 				borderWidth: 1,
// 				borderColor: "#ccc",
// 				borderRadius: 5,
// 			}}
// 			itemStyle={{
// 				padding: 10,
// 				marginTop: 2,
// 				backgroundColor: "#ddd",
// 				borderColor: "#bbb",
// 				borderWidth: 1,
// 				borderRadius: 5,
// 			}}
// 			itemTextStyle={{
// 				color: "#222",
// 			}}
// 			itemsContainerStyle={{
// 				maxHeight: "50%",
// 			}}
// 			items={items}
// 			placeholder='Placeholder.'
// 			resetValue={false}
// 			underlineColorAndroid='transparent'
// 		/>
// 	);
// };
const CandidateDietPlan = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<DietDropDown navigation={navigation} />
			</View>
			<View style={{ width: "100%", alignItems: "center" }}>
				<TouchableOpacity style={styles.button} onPress={() => {}}>
					<Text style={styles.repair}>Upload Video</Text>
				</TouchableOpacity>
			</View>
			<ScrollView>{/* <Text>CandidateDitPlan</Text> */}</ScrollView>
			<View
				style={{
					width: "100%",
					position: "absolute",
					bottom: 0,
					paddingVertical: 14,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#E8EAED",
					zIndex: 1,
				}}>
				<TouchableOpacity
					// onPress={navigation.navigate("PaymentSuccessfull")}
					onPress={() =>
						navigation.navigate("PaymentSuccessfull", {
							title: "Suggestion Sent ",
							value: " ",
							backScreenName: "StudentList",
						})
					}
					style={{
						backgroundColor: "#9932cc",
						padding: 12,
						borderRadius: 24,
						minWidth: 170,
					}}>
					<Text
						style={{
							fontSize: 18,
							color: "#fff",
							textAlign: "center",
						}}>
						Suggest
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E8EAED",
	},
	sectionTitle: {
		paddingTop: 15,
		textAlign: "center",
		padding: 10,
		color: "#9932cc",
		fontSize: 24,
		fontWeight: "bold",
		// fontStyle: "italic",
	},
	button: {
		alignItems: "center",
		marginTop: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 20,
	},
	repair: {
		textAlign: "justify", // <-- the magic
		fontWeight: "bold",
		fontSize: 18,
		color: "#9932cc",
	},
});
export default CandidateDietPlan;
