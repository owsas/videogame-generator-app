import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const { version } = require('../package.json');

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '100%',
          backgroundColor: 'white'
        }}
      >
        <View>
          <View style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/images/icon.png')} style={{ width: 100, height: 100 }} />
          </View>
          <Text style={styles.textCenter}>v{version}</Text>
          <Text style={styles.textCenter}>Made by Juan Camilo Guarín Peñaranda</Text>
          <Text style={styles.textCenter}>Cali, Colombia</Text>
          <Text style={styles.textCenter}>2018</Text>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  code: {
    padding: 5,
    backgroundColor: 'whitesmoke',
    width: 'auto'
  },
  textCenter: {
    textAlign: 'center'
  }
});
