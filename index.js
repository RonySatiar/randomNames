var uname = document.querySelector('#uname');
var action = document.querySelector('#action');
var inputForm = document.querySelector('#inputform');
var result = document.querySelector('#result');
// Submit Button will work for the following code
action.addEventListener('click',(boom)=>{
    var newName = ['Abul','Mofiz','Kangal','Damra','Pocha','Demon','Fokir','Gorib','Modon','Cute','Devil','Savage','Nowakhailla','Beyadob','Dreamer'];
    var randomNumber = parseInt(Math.random() * newName.length);
    console.log(newName[randomNumber]);
    if (uname.value === "") {
      window.alert('Come on, Let us know your name')
    }else {
      result.innerHTML = "<b>" + uname.value + "</b>" + " you are " + "<b>"+ newName[randomNumber] + "</b>" + " inside";
    }
    uname.value = ""

  });
