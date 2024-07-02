$(document).ready(function(){
    $("#myForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Por favor, digite o seu nome.",
                minlength: "O nome deve ter pelo menos 3 caracteres."
            },
            email: {
                required: "Por favor, digite o seu e-mail.",
                email: "Por favor, digite um e-mail válido."
            },
            message: {
                required: "Por favor, digite a sua mensagem.",
                minlength: "A mensagem deve ter pelo menos 5 caracteres."
            }
        },
        submitHandler: function(form) {
            alert("Formulário enviado com sucesso!");
            form.submit();
        }
    });
});
