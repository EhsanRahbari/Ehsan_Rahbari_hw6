function getArrayDepth(obj) {
    if (Array.isArray(obj)) return 1 + Math.max(...obj.map(t => getArrayDepth(t)))
    else return 0
}
console.log(getArrayDepth([10, [25, 13], [14, [55]], 2]));