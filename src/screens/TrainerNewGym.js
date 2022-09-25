/** @format */

import {
	StyleSheet,
	Text,
	StatusBar,
	TextInput,
	TouchableOpacity,
	View,
	SafeAreaView,
	Platform,
} from "react-native";
import React from "react";
import { CircleButton } from "../components/Button";
import left from "./../../assets/icons/left.png";
import Icon from "react-native-vector-icons/Ionicons";

const TrainerNewGym = ({ navigation }) => {
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
					Please type gym name{"\n\n"}
					<Text style={{ fontSize: 14 }}>
						if the gym is registered in our app, we'll add that gym to your
						list.
					</Text>
				</Text>
			</View>

			<View>
				<TextInput
					label='Email'
					style={styles.input}
					placeholder='Gym name'
					placeholderTextColor='#9932cc'
					keyboardType='email-address'
				/>
			</View>
			<View style={{ width: "170%", alignItems: "center" }}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.goBack()}>
					<Text style={styles.repair}>Add</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default TrainerNewGym;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#9932cc",
	},
	input: {
		height: 60,
		margin: 12,
		backgroundColor: "#fff",
		borderWidth: 0,
		color: "#9932cc",
		fontWeight: "200",
		fontSize: 18,
		borderRadius: 5,
		padding: 11,
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
