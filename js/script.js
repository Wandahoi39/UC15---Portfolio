//IA foi sim utilizado nesse trabalho (Claude e Gemini), mas principalmente o Claude para gerar ideias de código e sugestões de melhorias e o Gemini me ajudou a fazer o tema claro/escuro. Todo o código foi revisado e adaptado por mim, garantindo que o resultado final seja original e adequado às minhas necessidades.

// 1. Lógica para abrir/fechar o menu mobile
const btnMenu = document.getElementById('btn-menu');
const menuNav = document.getElementById('menu-nav');
const iconeMenu = document.getElementById('icone-menu');
const iconeTema = document.getElementById('icone-tema');
const iconeGithub = document.querySelector('.icone-github');

if (btnMenu && menuNav) {
  btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('ativo');
    menuNav.classList.toggle('aberto');
    const aberto = menuNav.classList.contains('aberto');
    btnMenu.setAttribute('aria-expanded', aberto);
  });

  // Fechar menu ao clicar num link
  const navLinks = document.querySelectorAll('.menu-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      btnMenu.classList.remove('ativo');
      menuNav.classList.remove('aberto');
      btnMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

// 2. Funcionalidade da Saudação Dinâmica
function obterSaudacao(hora) {
  if (hora < 12) {
    return "Bom dia";
  } else if (hora < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

const elementoTitulo = document.getElementById('titulo');
if (elementoTitulo) {
  const horaAtual = new Date().getHours();
  elementoTitulo.textContent = `${obterSaudacao(horaAtual)}, sou Vinícius`;
}

// 3. Animação do Boneco Pixel Art Acenando
const avatarPixel = document.getElementById('avatar-pixel');
if (avatarPixel) {
  const imgEstatica = 'img/pixelme.png';
  const imgAcenando = 'img/gifpixel.gif';

  setInterval(() => {
    avatarPixel.src = imgAcenando;
    setTimeout(() => {
      avatarPixel.src = imgEstatica;
    }, 2500);
  }, 7000);
}

// 4. Rodapé - Ano Automático
const spanAno = document.getElementById('ano-atual');
if (spanAno) {
  spanAno.textContent = new Date().getFullYear();
}

// 5. Botão de Alternância de Tema (Claro / Escuro)
const btnTema = document.getElementById('btn-tema');
if (btnTema) {
  btnTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro');
    const isClaro = document.body.classList.contains('tema-claro');
    
    // Alterna o ícone do menu com base no tema ativo
    if (iconeMenu) {
      iconeMenu.src = isClaro ? 'img/menuclaro.png' : 'img/menuescuro.png';
    }
    if (iconeTema) {
      iconeTema.src = isClaro ? 'img/solpixel.png' : 'img/luapixel.png';
    }
    if (iconeGithub) {
      iconeGithub.src = isClaro ? 'img/github-preto.svg' : 'img/github-branco.svg';
    }
  });
}

// 6. Validação Completa do Formulário de Contato
const formContato = document.getElementById('form-contato');
if (formContato) {
  formContato.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede o envio padrão

    // Elementos de input e erro
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const consentimentoInput = document.getElementById('consentimento');

    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroMensagem = document.getElementById('erro-mensagem');
    const erroConsentimento = document.getElementById('erro-consentimento');
    const sucessoMensagem = document.getElementById('sucesso-mensagem');

    // 1. Limpar erros e sucessos anteriores
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroMensagem.textContent = '';
    erroConsentimento.textContent = '';
    sucessoMensagem.style.display = 'none';
    sucessoMensagem.textContent = '';

    let formValido = true;

    // Validação do Nome
    if (nomeInput.value.trim() === '') {
      erroNome.textContent = 'Por favor, preencha o seu nome.';
      formValido = false;
    }

    // Validação do E-mail (deve conter '@' e '.')
    const emailValor = emailInput.value.trim();
    if (emailValor === '') {
      erroEmail.textContent = 'Por favor, preencha o seu e-mail.';
      formValido = false;
    } else if (!emailValor.includes('@') || !emailValor.includes('.')) {
      erroEmail.textContent = 'Insira um e-mail válido (exemplo: usuario@email.com).';
      formValido = false;
    }

    // Validação da Mensagem (mínimo de 20 caracteres)
    const mensagemValor = mensagemInput.value.trim();
    if (mensagemValor === '') {
      erroMensagem.textContent = 'Por favor, digite sua mensagem.';
      formValido = false;
    } else if (mensagemValor.length < 20) {
      erroMensagem.textContent = `A mensagem deve ter no mínimo 20 caracteres (atual: ${mensagemValor.length}).`;
      formValido = false;
    }

    // Validação do Consentimento LGPD
    if (!consentimentoInput.checked) {
      erroConsentimento.textContent = 'Você deve concordar com os termos para continuar.';
      formValido = false;
    }

    // Se tudo estiver correto
    if (formValido) {
      sucessoMensagem.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
      sucessoMensagem.style.display = 'block';
      formContato.reset(); // Limpa os campos do formulário
    }
  });
}