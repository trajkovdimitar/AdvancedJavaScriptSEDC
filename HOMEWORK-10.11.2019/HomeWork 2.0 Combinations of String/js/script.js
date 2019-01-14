let zbor = prompt("Please enter the word you want to combine:", "dog");
let kombinatorika = (zbor, x = '', y = []) => {
if(x){ 
    y.push(x);
}if(!zbor){
    return;
}
for(let i=0; i< zbor.length; i++){
    x += zbor[i];
    kombinatorika(zbor.slice(0,i) + zbor.slice(i+1), x, y);
    x = x.slice(0, x.length -1);
}
let uniq = [...new Set(y)];
// console.log('uniq:', uniq); 
return uniq;
};

console.log(kombinatorika(zbor));
//-------------------------------

