var uname = document.querySelector('#uname');
var action = document.querySelector('#action');
var inputForm = document.querySelector('#inputform');
var result = document.querySelector('#result');




  action.addEventListener('click',(boom)=>{
    var newName = ['Abul','Mofiz','Kangal','Damra','Pocha','Demon','Fokir','Gorib','Modon','Cute','Devil','Savage','Nowakhailla','Beyadob','Dreamer'];
    var randomNumber = parseInt(Math.random() * newName.length);
    console.log(newName[randomNumber]);
    result.innerHTML = uname.value + ", you are " + "<b>"+ newName[randomNumber] + "</b>" + " inside";
    uname.value = ""
    randomNumber = 0;
  });
