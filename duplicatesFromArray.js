function removeDuplicates(arr){
let output  = new Set(arr);
     
     console.log(...output);
}


removeDuplicates([2,2,2,3,4,5,5,5])



function removeDuplicates1(arr){

    let seen = {};
    let output = [];
    for(let i = 0 ; i < arr.length; i++){
        if(!seen[arr[i]]){
            seen[arr[i]] = true; 
            output.push(arr[i]);
        } 
        
    }    
    console.log(output)
}

removeDuplicates1([2,2,2,3,4,5,5,5,  0, 0])


function removeDuplicates2(arr){
    
    let slow = 0 ;
    for(let fast = 1 ; fast<arr.length; fast++){
        if(arr[slow] !== arr[fast]){
            slow++
            arr[slow] = arr[fast];
        }
    }
    console.log(arr.slice(0,slow+1))
}
removeDuplicates2([0,0,2,2,3,4,5,5,5])








