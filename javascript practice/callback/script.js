const callback = (arg) => {
console.log(arg);
}

const load= (src, callback)=>{
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = callback('harry');
    document.body.append(sc);
}

load("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);