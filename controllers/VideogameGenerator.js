const genres = require('../assets/json/genres.json');
const conflicts = require('../assets/json/conflicts.json');
// const platforms = require('../assets/json/platforms.json');
const scenarios = require('../assets/json/scenarios.json');
const characters = require('../assets/json/characters.json');

import getRandomElement from '../util/getRandomElement';

export default class VideogameGenerator {
    static generate() {
        return {
            genre: getRandomElement(genres),
            conflict: getRandomElement(conflicts),
            scenario: getRandomElement(scenarios),
            character: getRandomElement(characters),
        }
    }
}
