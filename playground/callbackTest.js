console.log("beginning")

 add = (first,second,callback)=> {

    setTimeout(()=>{
        const result= callback(first,second)   
        console.log("our result is : " + result)      
        },2000)
      
}
add(1,4,(first,second)=>{
    const sum= first+second 
    return sum ;
});

console.log("END");

