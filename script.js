let input = document.getElementById('inputBox'); //select input box
let button = document.querySelectorAll('button'); // select all button tags

let string = "";    // this empty str variable store the ans
let arr = Array.from(button)   //
arr.forEach(button => { 
    button.addEventListener('click',(e) =>{ 
        
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value =string;
        }
        //Del btn working
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        //Ac btn working
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
