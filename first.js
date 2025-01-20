//String
let str="hello world"  //*it can not change the original value 
console.log(str.replace("hello","welcome"));
console.log(str);

//at,charat,lenght ,lastindex,indexof, charCodeAt,substring,Array.from(string variable);
let arr=Array.from(str);
let maparr=arr.map((Element,index)=>{
console.log( `${Element}-${index}`)

})