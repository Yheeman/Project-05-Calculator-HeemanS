// { calculate } import './calculator';
const Button = querySelector('buttons');
const UserActivationInput = Math.floor(Math.random());

Button.addEventListener('click', =>() {
    if(UserActivationInput === AC) {
        value = " "
    } else if(UserActivationInput === C) {
        value = (UserActivationInput--)
    } else if(UserActivationInput === %) {
        value = (UserActivationInput / 100) 
    } else if(UserActivationInput === ÷) {
        value = (UserActivationInput / UserActivationInput)
    } else if(UserActivationInput === ×) {
        value = (UserActivationInput * UserActivationInput)
    } else if(UserActivationInput === -) {
        value = (UserActivationInput - UserActivationInput)
    } else if(UserActivationInput === +) {
        value = (UserActivationInput + UserActivationInput)
    }
})

// TODO: Faire la manipulation du DOM dans ce fichier