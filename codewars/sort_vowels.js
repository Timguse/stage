<p>
    In this kata, we want to sort the vowels in a special format.
    Write a function which takes a input string s and
    return a string in the following way:
</p>
function sortVowels(s) {
    if (typeof s !== 'string') return ''
    return s.split``.map(v => {
        if (/[aeiou]/i.test(v)) return '|' + v + '\n'
        else return v + '|' + '\n'
    }).join``.slice(0, -1)
}