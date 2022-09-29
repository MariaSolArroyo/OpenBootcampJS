let factorial =1;
let i=10;
while (i>0){
    factorial =factorial*i;
    console.log(factorial+"!");
    i--;
    if (i===1){
        break;
    }
}