
try{
    //simulated error
    throw new Error("simulated error")
}catch(e){
    console.log('' + e)
}finally{
  console.log("Test development");
}

/*
    Error: simulated error
    Test development
*/
