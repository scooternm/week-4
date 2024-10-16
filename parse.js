//PARSE paring knife, parcel

let corpus = "now is the time..."
console.log("LENGTH", corpus.length)
//i=0
//console.log(corpus[i++])
//i is for index
for(let i=15;i < corpus.length; i++){
    console.log(corpus[i]) //Repeats
}
console.log("DONE")

// for(i=0; i < corpus.length; i++){
//     console.log("INDEX:"+i, "LETTER:"+corpus[i],"CODE:"+corpus[i].charCodeAt(0))
// }
words = corpus.split(" ")
console.log(words)
console.log("LENGTH (word count):", words.length)
console.log(words[words.length -1])

ip = "127.0.0.1"
parts = ip.split(".")