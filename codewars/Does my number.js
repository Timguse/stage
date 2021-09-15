<p>
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a 
Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers
 will be passed into the function.
</p>
function narcissistic(value) {
    const _value = String(value).split('');
    let _result = 0;
    for (ch of _value) {
      const num = parseInt(ch, 0);
      _result += Math.pow(num, _value.length);
    }
  
    return _result === value;
  }