import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const Header = props => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		height: 65,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
	},
	textStyle: {
		fontSize: 20,
	},
};

export default Header;
