
let input = "this sky is blue" 
let output =''
// "blue is sky this"
let temp =input.split(' ')
for(let i = temp.length-1 ; i>=0; i--){
        output += temp.pop()
        output+=" "
     
}
console.log(output.trim());
