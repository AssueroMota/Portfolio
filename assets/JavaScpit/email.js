// Envio de Email


function confirmacao() {

    var Confirmar = confirm(`Confirmar as Informações abaixo \n
Nome:  ${nome.value}
Email:  ${email.value}
Assunto:  ${assunto.value}
Mensagem: ${mensagem.value}`
    )


    if (Confirmar == true) {

        let img = document.querySelector('.img');


        setTimeout(() => {
            console.log("Delayed for 1 second.");
            alert('Envio de Email confirmado,Obrigado');
            img.innerHTML = `<img src="assets/img/email/mailSend.gif">`
        }, "500")


        setTimeout(() => {
            console.log("Delayed for 7 second.");
            msgSuccess.innerHTML = `Email Enviado.`;
            img.innerHTML = `<img src="assets/img/email/mailSucess.jpg">`
        }, "1000")

        setTimeout(() => {
            window.location.href = "https://assueromota.github.io/Portfolio/"
        }, "1800")










    } else {
        alert('Informações não confirmadas!');
        let form = document.querySelector(".input-container");
        form.innerHTML = `<form action="#" method="POST" class="envioform">
        <!-- <form method="post" action="assets/loading/EmailLoading.html"> -->
        <div class="style-form-input full style-600">
            <input type="text" name="nome" id="nome" required />
            <label><i class="icon icon-user-1"></i> Nome</label>
        </div>

        <div class="style-form-input width1024 style-600">
            <input type="text" name="email" id="email" required />
            <label><i class="icon icon-mail-1"></i> E-mail</label>
        </div>

        <div class="style-form-input right width1024 style-600">
            <input type="text" name="assunto" id="assunto" required />
            <label><i class="icon icon-info-circled"></i> Assunto</label>
        </div>

        <div class="style-form-input full style-600">
            <textarea name="mensagem" required id="mensagem"></textarea>
            <label><i class="icon icon-comments"></i> Mensagem</label>
        </div>
        <div class="style-form-input full">
            <input type="hidden" name="acao" value="enviar">
            <button class="Cv-Form enviarEmail" type="submit" onclick="confirmacao ()">Enviar</button>
        </div>


        <!-- Estou utilizando uma API para facilitar o uso de envio de email -->
        <!-- como recomendação vou utilizar mais alguns comandos proprios da API para uma boa interação com o usuario -->
        <!-- <input type="hidden" name="_next" value="http://127.0.0.1:5500/index.html"> -->
        <input type="hidden" name="_subject" value="Email VINDO DO PORTFOLIO!">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
    </form>`

        window.location.assign("https://assueromota.github.io/Portfolio/");

    }





}
