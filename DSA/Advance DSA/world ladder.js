function ladderLength(beginWord, endWord, wordList){

  let set = new Set(wordList)
  let queue = [[beginWord,1]]

  while(queue.length){

    let [word,steps] = queue.shift()

    if(word === endWord)
      return steps

    for(let i=0;i<word.length;i++){

      for(let c=97;c<=122;c++){

        let newWord =
          word.slice(0,i) +
          String.fromCharCode(c) +
          word.slice(i+1)

        if(set.has(newWord)){
          queue.push([newWord,steps+1])
          set.delete(newWord)
        }
      }
    }
  }

  return 0
}



