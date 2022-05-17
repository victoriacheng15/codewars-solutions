/* 
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]
*/

/* 
PREP
p - array
r - array of sums of the same value
e - [1,1,7,7,3] # should return [2,14,3]
p
- loop through num
- if the number is the same as next number, add them
- until they are not the same
*/

function sumConsecutives(s) {
  const array = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== s[i - 1]) {
      array.push(s[i]);
    } else {
      array[array.length - 1] = array[array.length - 1] + s[i];
    }
  }
  return array;
}

function sumConsecutives1(s) {
  return s.reduce((acc, num, i) => {
    if (num !== s[i - 1]) {
      acc.push(num);
    } else {
      acc[acc.length - 1] = acc[acc.length - 1] + num;
    }
    return acc;
  }, []);
}
