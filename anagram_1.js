function anagram(s) {
    if (s.length % 2 !== 0) {
        return -1;
    }
    let firstHalfOcc = {}
    let secondHalfOcc = {}
    let givenStringArray = s.split('')
    for (let i = 0; i < givenStringArray.length / 2; ++i) {
        if (firstHalfOcc[givenStringArray[i]]) {
            firstHalfOcc[givenStringArray[i]]++
        } else {
            firstHalfOcc[givenStringArray[i]] = 1
        }
    }
    for (let i = givenStringArray.length / 2; i < givenStringArray.length; ++i) {
        if (secondHalfOcc[givenStringArray[i]]) {
            secondHalfOcc[givenStringArray[i]]++
        } else {
            secondHalfOcc[givenStringArray[i]] = 1
        }
    }
    const diffValues = getDifferentValues(firstHalfOcc, secondHalfOcc)
    return (Object.entries(diffValues).reduce((total, [key, value]) => {
        return total + value
    }, 0)) / 2
}

function getDifferentValues(obj1, obj2) {
    let temp = {}
    Object.keys(obj1).forEach(key => {
        if (obj2[key]) {
            temp[key] = Math.abs(obj1[key] - obj2[key])
        } else {
            temp[key] = obj1[key]
        }
    })
    Object.keys(obj2).forEach(key => {
        if (obj1[key]) {
            temp[key] = Math.abs(obj2[key] - obj1[key])
        } else {
            temp[key] = obj2[key]
        }
    })
    return temp
