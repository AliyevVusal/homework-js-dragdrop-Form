function ControlForm(e) {
    let inavlidlenght = document.getElementById(e).querySelectorAll(':invalid').length,  
    button = document.getElementById(e).querySelector('button[type="submit"]');

    console.log(inavlidlenght);

    let passwordin = document.getElementById('password');
    let password = document.getElementById('password').value;

    let passwordcdin = document.getElementById('passwordcdin');
    let passwordcd = document.getElementById('passwordcdin').value;

    //Password
    if(password === ''){
        passwordin.style.border = 'none';
    }else{
        if(password.length>6){
            passwordin.style.border = '2px solid green'
        }else{
            passwordin.style.border = '2px solid red'
        }
    }

    //Password Check
    if (password === passwordcd && password !== '') {
        
        passwordcdin.style.border = '2px solid green';
    
    }else if(password !== passwordcd && password !== ''){
    
        passwordcdin.style.border = '2px solid red';
    }else{
        passwordcdin.style.border = 'none';
    }

    // //Age
    // let age = document.getElementById('selectage').value;
    // let agesc = document.querySelector('select');
    // //let agesp = document.querySelector('span #agesp');

    // age = Number(age);

    // if(age === 0){
    //     agesc.style.border = '2px solid red'
    // }
    // else{
    //     agesc.style.border = '2px solid green'
    // }


    //Submit Button
    if(inavlidlenght === 0 && password === passwordcd){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled' , 'disabled');
    }






}
ControlForm('forms');

