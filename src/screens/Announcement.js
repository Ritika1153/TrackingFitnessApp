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
// import HeadingText from "../components/HeadingText";
const DATA = [
	{
		id: 1,
		name: "Anikat",
		annoucementText: "Fee Paid",
	},
	{
		id: 2,
		name: "Kumar",
		annoucementText: "Fee Paid",
	},
	{
		id: 3,
		name: "Tariq",
		annoucementText: "Fee Paid",
	},
	{
		id: 4,
		name: "Ali",
		annoucementText: "Fee Paid",
	},
	{
		id: 5,
		name: "Hamdan",
		annoucementText: "Exersice done",
	},
	{
		id: 6,
		name: "Jahanzaib",
		annoucementText: "Exersice done",
	},
	{
		id: 7,
		name: "Mehmood",
		annoucementText: "Exersice done",
	},
	{
		id: 8,
		name: "Mehmood",
		annoucementText: "Exersice done",
	},
	{
		id: 9,
		name: "Mehmood Ali",
		annoucementText: "Exersice done",
	},
	{
		id: 10,
		name: "Yasir Mehmood",
		annoucementText: "Exersice done",
	},
	// {
	// 	id: 11,
	// 	name: "All Members",
	// 	annoucementText: "Fee Reminder",
	// },
	// {
	// 	id: 12,
	// 	name: "Ali Mehmood",
	// 	annoucementText: "Fee Reminder",
	// },
	// {
	// 	id: 13,
	// 	name: "Rehman Mehmood",
	// 	annoucementText: "Fee Reminder",
	// },
	// {
	// 	id: 14,
	// 	name: "Zohaib Mehmood",
	// 	annoucementText: "Fee Reminder",
	// },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
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
					{item.annoucementText}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

const Announcement = (props) => {
	// console.log(props);
	const [selectedId, setSelectedId] = useState(null);
	var routeid = props.route.key;
	const renderItem = ({ item }) => {
		// const backgroundColor = item.id === selectedId ? "#9932cc" : "fff";
		// const color = item.id === selectedId ? "white" : "#9932cc";

		return (
			<Item
				item={item}
				onPress={() => setSelectedId(item.id)}
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
			{routeid == "Announcements-UV3caEu-rBq13MudZ28Fw" ? (
				<FAB
					style={styles.fab}
					icon='plus'
					small='true'
					onPress={() => console.log("Pressed1")}
				/>
			) : (
				<View></View>
			)}
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
		bottom: 10,
		right: 10,
		width: "12%",
		backgroundColor: "#9932cc",
		alignItems: "center",
	},
});

export default Announcement;
