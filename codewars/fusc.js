<p>
    Your job is to produce the code for the fusc function.
    In this kata, your function will be tested with small
    values of n, so you should
    not need to be concerned about stack overflow or timeouts.
</p>

function fusc(n) {
    if (n == 0 || n == 1) return n;
    if (n % 2 == 0) return fusc(n / 2);
    return fusc((n - 1) / 2) + fusc((n + 1) / 2);
}