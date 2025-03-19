import React from 'react';
import { StatusBar, View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar translucent={true} backgroundColor={"transparent"} barStyle={"dark-content"} />
			<MapView
				initialRegion={{
					latitude: 13.078225328502159,
					longitude: 80.27577287750019,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
				style={styles.container}
				mapType="standard"
			/>
		</View>
	)
}

export default App;