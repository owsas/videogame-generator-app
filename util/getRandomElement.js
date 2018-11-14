export default function getRandomElement(array) {
    const randIndex = Math.round(Math.random() * array.length);
    return array[randIndex];
}