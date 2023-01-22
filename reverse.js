function ReverseInt (num) {
    let str = String(num)
    let revStr = ''
    for (let i = 0; i < str.length; i++) {
        revStr = `${str[i]}${revStr}`
    }
    return Number(revStr)
}

console.log(ReverseInt(431))