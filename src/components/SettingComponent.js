/** @format */

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const SettingComponent = (props) => {
	// console.log(props);
	return (
		<TouchableOpacity
			style={{
				backgroundColor: "#9932cc",
				height: 60,
				// width: "100%",
				// padding: 20,
				marginHorizontal: 20,
				marginBottom: 10,
			}}
			onPress={() => {
				props.navigation.navigate(props.toScreen, {
					name: props.name,
				});
			}}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					padding: 15,
					marginLeft: 15,
				}}>
				<Icon name={props.iconName} size={25} color='#fff' />
				<Text
					style={{
						textAlign: "center",
						fontSize: 18,
						marginLeft: 10,
						fontWeight: "400",
					}}>
					{" "}
					{props.settingName}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default SettingComponent;

const styles = StyleSheet.create({});
