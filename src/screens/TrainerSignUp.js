/** @format */

import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Platform,
	StyleSheet,
	ScrollView,
	StatusBar,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

//components
import InputField from "../components/InputField";
const TrainerSignUp = ({ navigation }) => {
	const [data, setData] = React.useState({
		username: "",
		password: "",
		email: "",
		confirm_password: "",
		check_textInputChange: false,
		secureTextEntry: true,
		confirm_secureTextEntry: true,
	});

	const textInputChange = (val) => {
		if (val.length !== 0) {
			setData({
				...data,
				username: val,
				check_textInputChange: true,
			});
		} else {
			setData({
				...data,
				username: val,
				check_textInputChange: false,
			});
		}
	};

	const handlePasswordChange = (val) => {
		setData({
			...data,
			password: val,
		});
	};

	const handleConfirmPasswordChange = (val) => {
		setData({
			...data,
			confirm_password: val,
		});
	};

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	const updateConfirmSecureTextEntry = () => {
		setData({
			...data,
			confirm_secureTextEntry: !data.confirm_secureTextEntry,
		});
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#9932cc' barStyle='light-content' />
			<View style={styles.header}>
				<Text style={styles.text_header}>Register Now!</Text>
			</View>
			<View style={styles.footer}>
				<ScrollView>
					<Text style={styles.text_footer}>Username</Text>
					<View style={styles.action}>
						<FontAwesome name='user-o' color='#05375a' size={20} />
						<TextInput
							placeholder='Your Username'
							style={styles.textInput}
							autoCapitalize='none'
							onChangeText={(val) => textInputChange(val)}
						/>
						{data.check_textInputChange ? (
							<View>
								<Feather name='check-circle' color='green' size={20} />
							</View>
						) : null}
					</View>

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Gym Name
					</Text>
					<InputField
						logoname='map-pin'
						placeholder='Gym you are currently working in'
					/>

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Email Address
					</Text>
					<InputField logoname='mail' placeholder='Your email address' />

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Password
					</Text>
					<View style={styles.action}>
						<Feather name='lock' color='#05375a' size={20} />
						<TextInput
							placeholder='Your Password'
							secureTextEntry={data.secureTextEntry ? true : false}
							style={styles.textInput}
							autoCapitalize='none'
							onChangeText={(val) => handlePasswordChange(val)}
						/>
						<TouchableOpacity onPress={updateSecureTextEntry}>
							{data.secureTextEntry ? (
								<Feather name='eye-off' color='grey' size={20} />
							) : (
								<Feather name='eye' color='grey' size={20} />
							)}
						</TouchableOpacity>
					</View>

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Confirm Password
					</Text>
					<View style={styles.action}>
						<Feather name='lock' color='#05375a' size={20} />
						<TextInput
							placeholder='Confirm Your Password'
							secureTextEntry={data.confirm_secureTextEntry ? true : false}
							style={styles.textInput}
							autoCapitalize='none'
							onChangeText={(val) => handleConfirmPasswordChange(val)}
						/>
						<TouchableOpacity onPress={updateConfirmSecureTextEntry}>
							{data.secureTextEntry ? (
								<Feather name='eye-off' color='grey' size={20} />
							) : (
								<Feather name='eye' color='grey' size={20} />
							)}
						</TouchableOpacity>
					</View>

					<View style={styles.textPrivate}>
						<Text style={styles.color_textPrivate}>
							By signing up you agree to our
						</Text>
						<Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
							{" "}
							Terms of service
						</Text>
						<Text style={styles.color_textPrivate}> and</Text>
						<Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
							{" "}
							Privacy policy
						</Text>
					</View>
					<View style={styles.button}>
						<TouchableOpacity
							style={[
								styles.signIn,
								{
									borderColor: "#9932cc",
									borderWidth: 1,
									marginTop: 15,
								},
							]}
							onPress={() => navigation.navigate("MainScreen")}>
							<Text
								style={[
									styles.textSign,
									{
										color: "#9932cc",
									},
								]}>
								Sign Up
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("SplashScreen")}
							style={[
								styles.signIn,
								{
									backgroundColor: "#9932cc",
									borderColor: "#9932cc",
									borderWidth: 1,
									marginTop: 15,
								},
							]}>
							<Text
								style={[
									styles.textSign,
									{
										color: "#fff",
									},
								]}>
								<Feather name='arrow-left' size={20} /> Go Back
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default TrainerSignUp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#9932cc",
	},
	header: {
		flex: 1,
		justifyContent: "flex-end",
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	footer: {
		flex: Platform.OS === "ios" ? 6 : 11,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_header: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 30,
	},
	text_footer: {
		color: "#9932cc",
		fontSize: 18,
	},
	action: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#9932cc",
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === "ios" ? 0 : -10,
		paddingLeft: 10,
		color: "#05375a",
	},
	button: {
		alignItems: "center",
		marginTop: Platform.OS === "ios" ? 100 : 20,
	},
	signIn: {
		width: "100%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	textSign: {
		fontSize: 18,
		fontWeight: "bold",
	},
	textPrivate: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 20,
	},
	color_textPrivate: {
		color: "grey",
	},
});

{
	/* 
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							style={[
								styles.signIn,
								{
									borderColor: "#9932cc",
									borderWidth: 1,
									marginTop: 15,
								},
							]}>
							<Text
								style={[
									styles.textSign,
									{
										color: "#9932cc",
									},
								]}>
								Sign In
							</Text>
						</TouchableOpacity> */
}
{
	/* <View style={styles.action}>
						<Feather name='map-pin' color='#05375a' size={20} />
						<TextInput
							placeholder='Gym you are currently working in'
							style={styles.textInput}
							autoCapitalize='none'
						/>
					</View> */
}
