

let app = (
  function(){
    let userNumber = '12345'
    let userId = () =>{
      return userNumber
    }

    //closure
    return {
      userId: userId
    }
  }
)();


console.log(app.userId());
