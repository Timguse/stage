<p>
    Groups of characters decided to make a battle. Help them
    to figure out which group is more powerful. Create a function
    that will accept 2 variables and return the one who's stronger.
</p>
function battle(x, y) {
    let f = x.split('').reduce((a, b) => a + (b.charCodeAt() - 64), 0)
    let s = y.split('').reduce((a, b) => a + (b.charCodeAt() - 64), 0)
    return f > s ? x : s > f ? y : 'Tie!'
}
<p>
https://www.codewars.com/kata/595519279be6c575b5000016/train/javascript/6156b7f20f76ac0021ad9769
</p>