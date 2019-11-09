import * as React from "react";
import {View, Switch, Text} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Component = ({isEnabled, onValueChange}) => {
	return (
		<View
			style={{
				overflow: "hidden",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			<View
				style={{
					flexDirection: "row",
					paddingHorizontal: 8,
					marginVertical: 8,
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<Text
					style={{
						fontFamily: "MavenPro-Regular",
						fontSize: 15,
						color: "#fffbfa",
						textAlign: "center",
						marginRight: 10
					}}
				>
					Enable sound
				</Text>
				<Switch value={isEnabled} onValueChange={onValueChange} />
			</View>
		</View>
	);
};

import {connect} from "react-redux";
import {compose} from "recompose";

export default compose(
	connect(
		state => {
			return {
				isEnabled: state.settings.isMusicEnabled
			};
		},
		dispatch => {
			return {
				onValueChange: isEnabled => {
					dispatch({
						type: isEnabled ? "ENABLE_MUSIC" : "DISABLE_MUSIC"
					});
				}
			};
		}
	)
)(Component);
