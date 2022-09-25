/** @format */

import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../../constants";

const Home = () => {
	const [nftData, setNftData] = useState(NFTData);

	const handleSearch = (value) => {
		// console.log(value);
		if (value.length === 0) {
			setNftData(NFTData);
		}

		// const filteredData = NFTData.filter((item) => {
		// 	// console.log(item.name);
		// 	let flag = false;

		// 	if (value) {
		// 		// value = item.name.toLowerCase();
		// 		flag = true;
		// 	}

		// 	if (flag) {
		// 		item.name = value;
		// 		// console.log(item.name);
		// 		return item.name.toLowerCase().includes(value.toLowerCase());
		// 	}
		// });

		const filteredData = NFTData.filter((item) => {
			console.log("item Name:" + item.name);
			{
				item.name == undefined
					? NFTData.at(5)
					: item.name.toLowerCase().includes(value.toLowerCase());
			}
		});

		// console.log("Filtered data length" + filteredData.length);

		if (filteredData.length === 0) {
			setNftData(NFTData);
		} else {
			setNftData(filteredData);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar backgroundColor={"#9932cc"} />
			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					<FlatList
						data={nftData}
						renderItem={({ item }) => <NFTCard data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
					/>
				</View>

				<View
					style={{
						position: "relative",
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: -1,
					}}>
					<View style={{ height: 300, backgroundColor: "#9932cc" }} />
					<View style={{ flex: 1, backgroundColor: "#9932cc" }} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
