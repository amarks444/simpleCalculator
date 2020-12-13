const screen = document.getElementById('screen');
const buttons  = document.querySelectorAll('button');
let screenValue='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        console.log('Button Text is ',buttonText);
        if(buttonText=='X')
        {
            screenValue += '*';
            screen.value = screenValue;
        }
        else if(buttonText=='C')
        {
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText=='=')
        {
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else{
            screenValue +=  buttonText;
            screen.value = screenValue;
        }
    })
}