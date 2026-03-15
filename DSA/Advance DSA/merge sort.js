function mergeKLists(lists){

  let arr = []

  for(let l of lists){
    while(l){
      arr.push(l.val)
      l = l.next
    }
  }

  arr.sort((a,b)=>a-b)

  let dummy = {next:null}
  let curr = dummy

  for(let v of arr){
    curr.next = {val:v,next:null}
    curr = curr.next
  }

  return dummy.next
}



