<p>
Given an array of integers.

Return an array, where the first element is the count of positives 
numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.
</p>
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];
  
    const positives = input.filter(number => Math.sign(number) === 1).reduce(a => a + 1, 0);
  
    const negatives = input.filter(number => Math.sign(number) === -1).reduce((a, b) => a + b, 0);
  
    return [positives, negatives];
  }