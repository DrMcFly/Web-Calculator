let input = '';
let output;
let array = '';


function main(val1) 
{
    
    
    if (val1 == undefined) {
        
        input = '';

    } else if(val1 == '='){

        console.log(array[1]);
        
        switch (String(array[1])) {
            case '+':
                
                output = Number(array[0]) + Number(array[2]);
                document.getElementById('textbox1').value = output;
                break;

            case '-':
                
                output = Number(array[0]) - Number(array[2]);
                document.getElementById('textbox1').value = output;
                break;
            
            case '*':
                
                output = Number(array[0]) * Number(array[2]);
                document.getElementById('textbox1').value = output;
                break;
            
            case '/':
            
                output = Number(array[0]) / Number(array[2]);
                document.getElementById('textbox1').value = output;
                break;

        }

        input = output;

    } else {
        input = String(input) + String(val1);
        document.getElementById('textbox1').value = input;
    }

    array = input.split(" ");
    console.log(array);



    


        
}
