//// Find First Non-Repeating Character

function firstUniqueChar(str) {
    let hash = {}

    for (let ch of str) {
        hash[ch] = (hash[ch] || 0) + 1
    }

    for (let ch of str) {
        if (hash[ch] === 1) {
            return ch
        }
    }

    return null
}

console.log(firstUniqueChar("swiss"))



//// output

// w 

///// Check if Two Strings are Anagrams

function isAnagram(s1, s2) {

    if (s1.length !== s2.length) return false

    let hash = {}

    for (let ch of s1) {
        hash[ch] = (hash[ch] || 0) + 1
    }

    for (let ch of s2) {
        if (!hash[ch]) {
            return false
        }
        hash[ch]--
    }

    return true
}

console.log(isAnagram("listen", "silent"))



//// output

///  true


