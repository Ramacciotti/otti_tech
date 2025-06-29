document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('professionalRegistration');
  if (!form) {
    console.error('Formulário não encontrado!');
    return;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_6jkty6q', 'template_ob0js36', this)
      .then(() => {
        alert('Formulário enviado com sucesso!');
        this.reset();
      }, (error) => {
        alert('Erro ao enviar formulário: ' + JSON.stringify(error));
      });
  });
});

  function applyMask(input, mask) {
    input.addEventListener('input', () => {
      let i = 0;
      const value = input.value.replace(/\D/g, '');
      input.value = mask.replace(/#/g, () => value[i++] || '');
    });
  }

  applyMask(document.getElementById('cpf'), '###.###.###-##');
  applyMask(document.getElementById('zipcode'), '#####-###');
  applyMask(document.getElementById('phone'), '(##) #####-####');

  // Máscara simples para CRP: 5 números + barra + 2 letras
    const crpInput = document.getElementById('crp');
    crpInput.addEventListener('input', () => {
      let val = crpInput.value.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();
      if (val.length > 5) val = val.slice(0, 5) + '/' + val.slice(5, 7);
      crpInput.value = val.slice(0, 8);
    });

    // Validação de e-mail
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', () => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(emailInput.value)) {
        alert('Por favor, insira um e-mail válido.');
        emailInput.focus();
      }
    });

