<p>
    We want to create a function that will add numbers
    together when called in succession.

    We also want to be able to continue to add numbers
    to our chain.

    A single call should return the number passed in.

    add(1); // 1
    We should be able to store the returned values and
    reuse them.
    var addTwo = add(2);
    addTwo; // 2
    addTwo + 5; // 7
    addTwo(3); // 5
    addTwo(3)(5); // 10
    We can assume any number being passed in will be
    valid whole number.
</p>

function add(n) {
    var f = function (x) { return add(n + x); };
    f.valueOf = function () { return n; };
    return f;
}