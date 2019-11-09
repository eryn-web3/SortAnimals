import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {connect} from "react-redux";
import {onlyUpdateForKeys} from "recompose";

const GameScoreText_ = ({count}) => {
	return <View style={styles.rightTextWrap}>
			<Text style={styles.rightText}>{count}</Text>
		</View>
};

const RightAnswerCount = onlyUpdateForKeys(["rightAnswerCount"])(
	GameScoreText_
);

const styles = StyleSheet.create({
	rightTextWrap: {
		height: 30,
		width: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
		backgroundColor: "green",
	},
	rightText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 18
	}
});

RightAnswerCount.defaultProps = {
	rightAnswerCount: 0
};

export default RightAnswerCount;
