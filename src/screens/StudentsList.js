/** @format */

import React, { useState } from "react";
import {
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	Image,
	View,
	TouchableOpacity,
} from "react-native";
import avatar from "../../assets/avatar.png";
import { FAB } from "react-native-paper";

import CandidateProfile from "./CandidateProfile";

const DATA = [
	{
		id: 1,
		name: "Anikat",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 2,
		name: "Kumar",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 3,
		name: "Tariq",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 4,
		name: "Ali",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 5,
		name: "Hamdan",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 6,
		name: "Jahanzaib",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 7,
		name: "Mehmood",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 8,
		name: "Mehmood",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 9,
		name: "Mehmood Ali",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 10,
		name: "Yasir Mehmood",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 11,
		name: "All Members",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 12,
		name: "Ali Mehmood",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 13,
		name: "Rehman Mehmood",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
	{
		id: 14,
		name: "Zohaib Mehmood",
		gymName: "Flex Gym",
		phoneNumber: "+92-303-6573214",
		emailAddress: "Anikat@gmail.com",
		bmi: 25,
		bodyWeight: 98,
		weightStatus: "Over Weighted",
		caloriesTotal: 2679,
		feeStatus: "Paid",
		currentDietPlan: "Kito Diet",
		bodyFat: "9.8%",
	},
];

const Item = ({ item, onPress, backgroundColor, textColor, navigation }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.container, backgroundColor]}>
			<View style={styles.HeaderLeftImageView}>
				<Image style={styles.HeaderLeftImage} source={avatar} size={80} />
			</View>
			<View style={{ flexDirection: "row", marginLeft: 10 }}>
				<View>
					<Text style={[styles.title, textColor]}>{item.name}</Text>
					<View style={{ padding: 2 }}></View>
					<Text style={[styles.annoucementText, , textColor]}>
						{item.gymName}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};
const StudentList = ({ navigation }) => {
	const [selectedId, setSelectedId] = useState(null);

	const renderItem = ({ item }) => {
		// const backgroundColor = item.id === selectedId ? "#9932cc" : "fff";
		// const color = item.id === selectedId ? "white" : "#9932cc";

		return (
			<Item
				item={item}
				onPress={() =>
					navigation.navigate("CandidateProfile", {
						name: item.name,
						gymName: item.gymName,
						phoneNumber: item.phoneNumber,
						emailAddress: item.emailAddress,
						bmi: item.bmi,
						bodyWeight: item.bodyWeight,
						weightStatus: item.weightStatus,
						bodyFat: item.bodyFat,
						currentDietPlan: item.currentDietPlan,
						caloriesTotal: item.caloriesTotal,
						feeStatus: item.feeStatus,
					})
				}
				navigation
				// backgroundColor={{ backgroundColor }}
				// textColor={{ color }}
			/>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				extraData={selectedId}
			/>
			<FAB
				style={styles.fab}
				icon='plus'
				small='true'
				onPress={() => navigation.navigate("TrainerAddStudent")}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight / 2 || 10,
		width: "100%",
		height: "100%",
		flexDirection: "row",
		backgroundColor: "#fff",
	},
	item: {
		padding: 15,
		marginVertical: 5,
		marginHorizontal: 18,
	},
	title: {
		color: "#9932cc",
		fontSize: 23,
	},
	annoucementText: {
		fontSize: 17,
		color: "black",
	},
	HeaderLeftImage: {
		width: "100%",
		height: "100%",
		borderRadius: 50,
	},
	HeaderLeftImageView: {
		marginVertical: 5,
		marginBottom: 15,
		marginHorizontal: 18,
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
		marginLeft: 15,
	},
	fab: {
		position: "absolute",
		bottom: 30,
		right: 30,
		width: "12%",
		// height: "8%",

		backgroundColor: "#9932cc",
		alignItems: "center",
	},
});

export default StudentList;
