let buttons= document.querySelectorAll('.button');
let display= document.getElementById("result");
let string = "";

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        let value=this.getAttribute('data-value');
        if(value=='=')
        {    string=eval(string);
            display.value =string;
        }
        else if(value=='AC'){
            string="";
            display.value=string;
        }
        else{
            string=string+ value;
            console.log(value);
            display.value = string;
        }
    })
}