import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = props => {
	return (
		<TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
			<Text style={styles.buttonText}> Click Me</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aFF',
		marginLeft: 5,
		marginRight: 5,
	},
	buttonText: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
	},
};

export default Button;
