
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

const nome = document.querySelector('#nome');
const telefone = document.querySelector('#celular');
const email = document.querySelector('#email');
const mensagem = document.querySelector('#mensagem');
const enviar = document.querySelector('.btn-enviar');

let nomeInput = '';
let telefoneInput = '';
let emailInput = '';
let mensagemInput = '';

nome.addEventListener('input', () => {
    nomeInput = nome.value;
});
telefone.addEventListener('input', () => {
    telefoneInput = telefone.value;
});
email.addEventListener('input', () => {
    emailInput = email.value;
});
mensagem.addEventListener('input', () => {
    mensagemInput = mensagem.value;
});

async function EnviarEmail(payload) {
    await emailjs
        .send('service_7pxnyhk', 'template_dwjssms', payload, 'N_XJtZpGdGSIiPeDT')
        .then(
            function (response) {
                console.log('SUCCESS!', response.status, response.text);
            },
            function (error) {
                console.log('FAILED...', error);
            },
        );
}

enviar.addEventListener('click', async () => {
    const payload = {
        from_name: nomeInput,
        reply_to: emailInput,
        message:  `
    Telefone: ${telefoneInput}

    Mensage: ${mensagemInput}`
    };
   EnviarEmail(payload); 
  console.log(payload)
});



