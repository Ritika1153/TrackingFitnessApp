/** @format */

import {
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
	View,
	SafeAreaView,
} from "react-native";
import React from "react";
import { CircleButton } from "../components/Button";
import left from "./../../assets/icons/left.png";

const UploadVid = ({ navigation, route }) => {
	console.log(route);
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					width: "100%",
					height: 100,
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					position: "relative",
				}}>
				<CircleButton
					imgUrl={left}
					handlePress={() => navigation.goBack()}
					left={15}
					top={StatusBar.currentHeight + 10}
				/>
			</View>
			<View style={styles.header}>
				<Text style={styles.text_header}>
					Upload task video to get verified from trainer
					<Text style={{ fontSize: 18 }}>
						{" "}
						or if exersice was being done in supervision of trainer physically
						you can skip video and mark task as done.
					</Text>
				</Text>
			</View>
			<View style={{ display: "flex", flexDirection: "row", margin: 15 }}>
				<View style={{ width: "50%", alignItems: "center" }}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.goBack()}>
						<Text style={styles.repair}>Upload Video</Text>
					</TouchableOpacity>
				</View>

				<View style={{ width: "50%", alignItems: "center" }}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.goBack()}>
						<Text style={styles.repair}>Mark task as done</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default UploadVid;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#9932cc",
	},
	header: {
		justifyContent: "flex-end",
		padding: 30,
		paddingBottom: 50,
	},
	text_header: {
		color: "#FFF",
		fontWeight: "bold",
		fontSize: 27,
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
