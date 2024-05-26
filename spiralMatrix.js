spiralOrder : function(A){
        
     let arr = [...A];
      let final = [];
      
let top = 0,
    bottom = arr.length - 1,
    left = 0,
    right = arr[0].length - 1;
    spiralMatrix(top, bottom,left,right)  
        
    function spiralMatrix(top, bottom, left, right) {
        if (top > bottom || left > right) {
            return;
        }

        for (let i = left; i <= right; i++) {
            final.push(arr[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            final.push(arr[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
            final.push(arr[bottom][i]);
            }
        bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                final.push(arr[i][left]);
            }
            left++;
        }

        spiralMatrix(top, bottom, left, right);
    }
    return final;   
	}\
