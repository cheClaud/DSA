let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function anagram(mum) {
  let anagramMap = new Map();
  mum.forEach((element) => {
    
    let sortedAnagram = element.toLowerCase().split("").sort().join("");
    anagramMap.set(sortedAnagram, element);
  });
  return Array.from(anagramMap.values());
}

console.log(anagram(arr)); 
