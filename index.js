// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    const newCatsArray = [...cats, name ];
    

    return newCatsArray;
}

function prependCat(name) {
    const newCatsArray = [ name ,...cats];
    

    return newCatsArray;
}

function removeLastCat() {
    const newCatsArray = [...cats];
    newCatsArray.splice(-1)

    return newCatsArray;
}

function removeFirstCat() {
    const newCatsArray = [...cats];
    newCatsArray.shift(0)

    return newCatsArray;
}
