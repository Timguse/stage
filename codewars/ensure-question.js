<p>
    Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark,
    in which case, returns the original string.
</p>

function ensureQuestion(s) {
    return s.split('?').join('').concat('?');
}
<p>https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript/613b53499ecf8600324cc810</p>