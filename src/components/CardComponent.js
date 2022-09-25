/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableRipple, Title } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
const CardComponent = (props) => {
	// console.log(props);
	// console.log(props);
	return (
		// <LinearGradient
		// 	colors={[
		// 		"#00FFFF",
		// 		"#17C8FF",
		// 		"#329BFF",
		// 		"#4C64FF",
		// 		"#6536FF",
		// 		"#8000FF",
		// 	]}
		// 	start={{ x: 0.0, y: 1.0 }}
		// 	end={{ x: 1.0, y: 1.0 }}
		// 	style={{
		// 		// height: 48,
		// 		width: "50%",
		// 		alignItems: "center",
		// 		justifyContent: "center",
		// 		backgroundColor: "#9932cc",
		// 		borderRightColor: "#fff",
		// 		borderRightWidth: 5,
		// 	}}>
		<TouchableRipple
			onPress={() =>
				props.navigation.navigate(props.ScreenName, {
					name: props.name,
					userType: props.userType,
					comingFrom: props.comingFrom,
				})
			}
			style={[
				styles.infoBox,
				{
					backgroundColor: "#9932cc",
					borderRightColor: "#fff",
					borderRightWidth: 3,
					marginRight: 20,
				},
			]}>
			<Title style={{ color: "white", fontSize: 15 }}>
				{" "}
				{
					<Icon name='body-outline' style={{ fontSize: 20 }}>
						{" "}
					</Icon>
				}
				{props.title}
			</Title>
		</TouchableRipple>
		// </LinearGradient>
	);
};

export default CardComponent;

const styles = StyleSheet.create({
	infoBox: {
		borderRadius: 20,
		width: "50%",
		alignItems: "center",
		justifyContent: "center",
	},
});
