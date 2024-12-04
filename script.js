const technicalCard = document.getElementById('technicalCard');
const softCard = document.getElementById('softCard');
const submit = document.getElementById("submit")

technicalCard.addEventListener('click', (event) => {
    technicalCard.classList.add('active');
    softCard.classList.remove('active');
    event.stopPropagation(); 
});

softCard.addEventListener('click', (event) => {
    softCard.classList.add('active');
    technicalCard.classList.remove('active');
    event.stopPropagation(); 
});

document.addEventListener('click', () => {
    softCard.classList.remove('active');
    technicalCard.classList.remove('active');
});

 function sendMail(){
    let vals = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value
    }
    console.log(vals.name.value)
    if(vals.name.value !== undefined && vals.number.value !== "" && vals.email.value !== null){
        emailjs.send("service_153fmo4", "template_54l00y6", vals).then(alert("Your details successfully sent"));
        console.log(vals.name.value);
    }
    
 }
