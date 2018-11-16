import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem.js';

const conflicts = require('../assets/json/conflicts.json');

export default class ConflictsScreen extends React.Component {
  static navigationOptions = {
    title: 'Conflicts List',
  };

  renderItem = ({ item }) => {
    return (
      <ListItem key={item.name} title={item.name} description={item.description} />
    );
  }

  render() {
    return (
        <FlatList 
            data={conflicts}
            renderItem={this.renderItem}
        />
    );
  }
}
