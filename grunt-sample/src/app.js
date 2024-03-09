

const cherry = (arr) => {
    if(!Array.isArray(arr)) return arr

    const v = arr.map(v => v + 2)

    return Array.isArray(v) && v.length > 0
}

cherry([1,2,3])
