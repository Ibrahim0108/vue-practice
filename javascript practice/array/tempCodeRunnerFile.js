let obj = {
    a: 1,
    b : 2,
    c :88
}
for (const value in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, value)) {
        const element = obj[value];
        console.log(value ,element)
        
    }
}