// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
    return cats
}
function destructivelyPrependCat(Bob) {
    cats.unshift("bob")
    return cats
}
function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}
function appendCat(Broom) {
    return[...cats, Broom]
}
function prependCat(Arnold) {
    return[Arnold, ...cats]
}
function removeLastCat() {
    return cats.slice(0, cats.length-1);
}
function removeFirstCat() {
    return cats.slice(0, cats.length1);
}