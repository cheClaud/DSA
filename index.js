// Anagrams are words that have the same number of same letters, but in different order.
// nap - pan
// ear - are - era

// Write a function aclean(arr) that returns an array cleaned from anagrams.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(mum){
    let anagramMap = new Map();
    mum.forEach(element => {
        let sortedAnagram=element.toLowerCase().split('').sort().join('');
        anagramMap.set(sortedAnagram, element)
        
    });
    return Array.from(anagramMap.values())
}
console.log(aclean(arr));
//alert(aclean(arr));
 // "nap,teachers,ear" or "PAN,cheaters,era"
