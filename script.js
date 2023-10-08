let User = {
    name:"name.value",
    age:"age.value",
    city:"city.value",  
    phone:"number.value",

    Save:function Save(){
        let input = document.getElementById('input');
        alert(input.value) 
        document.getElementById('output').value = "";
        
    }
}   
    //function showUsersName(){
        document.getElementById('Show Name').onclick = function(){
            for (let i = 0; i < document.getElementsByTagName('span').length; i++){
            alert('id = ' + document.getElementsByTagName('span')[i].id);
            }
        }
   // }


let output = document.querySelector();
alert(output)