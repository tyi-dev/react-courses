let names = ["similar","words","are","boring","and","boring","words", "are", "deleted"];

let uniq = names.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
},[]);

console.log(uniq)
