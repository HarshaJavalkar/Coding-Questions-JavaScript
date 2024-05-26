// 1 2 3 4 5   5 4 3 2 1 
// 1 2 3 4       5 4 3 2 
// 1 2 3           5 4 3 
// 1 2               5 4 
// 1                   1 
// 1 2               2 1 
// 1 2 3           3 2 1 
// 1 2 3 4       4 3 2 1 
// 1 2 3 4 5   5 4 3 2 1


function printLine(count, current=1){
    if(count<current){
        return ;
    }
    process.stdout.write(current + ' ' )
    printLine(count, current+1)
}
function printLineInverse(count, current=5){
    if(count<=0){
        return ;
    }
    process.stdout.write(current + ' ' )
    printLineInverse(count-1, current-1)
}

function printSpaces(count, current=1){
    if(count<current){
        return ;
    }
    process.stdout.write(' ')
    printSpaces(count, current+1)
}


function printRecursivelyTriangleInverted(rows, currentRow =1){
    if(rows<=1){
        return ;
    }
    printLine(rows)
    printSpaces( (2 * currentRow) -1)
    printSpaces( (2 * currentRow) -1)

    printLineInverse(rows)
    console.log()

    printRecursivelyTriangleInverted(rows-1, currentRow+1)
}

printRecursivelyTriangleInverted(5)
function printRecursiveTriangle(rows, current=1){
    if(current>rows){
        return ;
    }
    printLine(current)
    printSpaces(2*(rows-current) + 1)
    printSpaces(2*(rows-current) + 1)
    printLineInverse(current, current);
    console.log()
    printRecursiveTriangle(rows, current+1)
}
printRecursiveTriangle(5)
