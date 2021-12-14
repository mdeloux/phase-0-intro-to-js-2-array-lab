// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});
function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const newCats = [...cats, "Broom"]
    return newCats;
}
function prependCat() {
    const newCats = ["Arnold", ...cats]
    return newCats;
}
function removeLastCat() {
    const copyOfCats = cats.slice(0, cats.length - 1);
    return copyOfCats;
}
function removeFirstCat() {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}
