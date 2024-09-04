document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.certificacao-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.href;
            window.open(url, '_blank');
        });
    });
});

(function() {
    emailjs.init('rn9souEfARDwo7uCm');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('Malik', 'template_64ebx75', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Mensagem enviada com sucesso!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Ocorreu um erro ao enviar a mensagem.");
        });
});
