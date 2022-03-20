/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(strArr){
  return strArr
            .split(' ')
            .map(word => word.length)
            .sort((a,b) => a - b)[0]
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));