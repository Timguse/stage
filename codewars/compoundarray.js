<p>
    You have to create a method "compoundArray" which should take
    as input two int arrays of different length and return one int
    array with numbers of both arrays shuffled one by one.
</p>
function compoundArray(a, b) {
    let arr = [];
    for (let i = 0; i < (a.length > b.length ? a.length : b.length); i++) {
        arr.push(a[i])
        arr.push(b[i])
    }
    return arr.filter(v => v != undefined)
}

<p>
https://github.com/Automedon/CodeWars-7-kyu-Soluitions/blob/master/CompoundArray
</p>