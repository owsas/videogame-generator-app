import React from 'react';
import { View, Text } from 'react-native';

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16 }}>{this.props.title}</Text>
        <Text>{this.props.description}</Text>
      </View>
    );
  }
}
