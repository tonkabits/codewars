function longest(s1, s2) {

    // create a mixed arr
    // check if mixed arr has any repeated chars and removed if so
    let finalArr = []
    let arr1 = Array.from(s1)
    let arr2 = Array.from(s2)
    let mixArr = [...s1, ...s2]
    mixArr.forEach((item, index) => {
        if (mixArr.indexOf(item) == index)
            finalArr.push(item)
    })
    finalArr.sort()

    return finalArr.join('')


}