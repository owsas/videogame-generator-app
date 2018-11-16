import React from 'react';
import { View, Text } from 'react-native';

export default class Videogame extends React.Component {
    render() {
        const { videogame } = this.props;

        return (
            <View style={{ padding: 10 }}>
                <Text>Main Character: {videogame.character.name}</Text>
                <Text>Scenario: {videogame.scenario.name}</Text>
                <View style={{ marginTop: 10 }}>
                    <Text>Genre: {videogame.genre.name}</Text>
                    <Text>{videogame.genre.description}</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text>Conflict: {videogame.conflict.name}</Text>
                    <Text>{videogame.conflict.description}</Text>
                </View>
            </View>
        );
    }
}