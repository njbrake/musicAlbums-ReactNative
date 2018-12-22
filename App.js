/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Header headerText="Check" />
				<AlbumList />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
