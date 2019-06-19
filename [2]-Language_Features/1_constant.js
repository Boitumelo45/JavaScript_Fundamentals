//constant do not change

const PI_ =  3.1415

try{
    PI_ = 3
    console.log(PI_);
}catch(e){
    console.log(e); //TypeError: Assignment to constant variable.
}finally{
    console.log("Logs anyway...");
}
