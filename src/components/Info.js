import * as React from "react";
import {
	ScrollView,
	Linking,
	TouchableOpacity,
	View,
	Text,
	Image
} from "react-native";

import {photoSources} from "../data/index";
import Heart from "./Heart";
import RightAnswerCount from "./RightAnswerCount";

const Info = ({scrollViewRef}) => {
	return (
		<ScrollView
			ref={scrollViewRef}
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					width: "100%",
					padding: 16
				}}
			>
				<Text
					style={{
						fontSize: 25,
						color: '#ffae00',
						marginBottom: 8
					}}
				>
					Sort Animal
				</Text>

				<Text
					style={{
						fontSize: 12,
						color: '#fff'
					}}
				>
					version: 1.0.0
				</Text>

				<View style={{}}>
					<Text
						style={{
							marginTop: 24,
							fontSize: 20,
							color: '#01d8ff',
							marginBottom: 8
						}}
					>
						How To play
					</Text>
					<Text style={{color: '#fff'}}>1) Select photo categories</Text>
					<Text style={{color: '#fff'}}>2) Swipe photos according the categories</Text>
					<Text style={{color: '#fff'}}>3) Game ends after 5th mistake</Text>

					<Text
						style={{
							marginTop: 24,
							fontSize: 20,
							color: '#01d8ff',
							marginBottom: 8
						}}
					>
						Ui elements
					</Text>

					<View
						style={{
							alignItems: "center",
							flexDirection: "row"
						}}
					>
						<Heart color={"red"} cornerColor={"#faff00"} />
						<Text
							style={{
								marginStart: 10,
								color: '#fff'
							}}
						>
							- life count
						</Text>
					</View>

					<View
						style={{
							marginTop: 8,
							alignItems: "center",
							flexDirection: "row"
						}}
					>
						<RightAnswerCount count={10} />
						<Text
							style={{
								marginStart: 10,
								color: '#fff'
							}}
						>
							- game score
						</Text>
					</View>
				</View>

				<Text
					style={{
						fontSize: 20,
						marginTop: 24,
						marginBottom: 8,
						color: '#01d8ff',
					}}
				>
					Assets sources
				</Text>
				{photoSources.map(image => {
					return (
						<View key={image.resource}>
							<Image
								style={{
									height: 150,
									aspectRatio: 1,
									borderRadius: 10,
									marginBottom: 5
								}}
								source={image.resource}
							/>

							<TouchableOpacity onPress={() => Linking.openURL(image.source)}>
								<Text
									style={{
										marginBottom: 15,
										fontSize: 14,
										color: '#747df2'
									}}
									key={image.source}
								>
									{image.source}
								</Text>
							</TouchableOpacity>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default Info;
