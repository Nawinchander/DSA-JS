///Two Sum 

function twoSum(arr, target) {
    let map = {}

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]

        if (map[complement] !== undefined) {
            return [map[complement], i]
        }

        map[arr[i]] = i
    }

    return []
}

console.log(twoSum([2,7,11,15], 9))

//// output

/// [0,1]

/// Time Complexity 0(n)


///// Count Frequency of Elements

function countFrequency(arr) {
    let hash = {}

    for (let num of arr) {
        if (hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    }

    return hash
}

console.log(countFrequency([1,2,2,3,3,3,4]))



//// output

/// {1:1, 2:2, 3:3, 4:1}


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

//// Find Duplicate Element

function findDuplicates(arr) {
    let seen = {}
    let duplicates = []

    for (let num of arr) {
        if (seen[num]) {
            duplicates.push(num)
        } else {
            seen[num] = true
        }
    }

    return duplicates
}

console.log(findDuplicates([1,2,3,2,4,5,3]))


/// output

//// [2,3]


//// alternate method using Map

function frequencyMap(arr) {
    let map = new Map()

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    return map
}

console.log(frequencyMap([1,2,2,3]))



