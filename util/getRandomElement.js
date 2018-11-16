export default function getRandomElement(array) {
    const randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
}