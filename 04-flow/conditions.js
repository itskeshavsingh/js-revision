// = -> value asign krna 
// == -> check krna equal h ki nhi 
// === -> data type bhi check krta h  ye strict equal h


const temp=40;
if (temp>30){
    console.log(true)
}
else {
    false
}

const month =3

switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;

    default :
      console.log("none")

}


// falsy values

//  false,0,-0,BigInt 0n,"",null,undefined,NaN


// truthy values

// "0",'false'," ",[],{},function(){}

const EmptyObj= {}

if (Object.keys(EmptyObj).length ===0){
    console.log("object is empty");
}