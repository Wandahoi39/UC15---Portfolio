//IA foi sim utilizado nesse trabalho (Claude e Gemini), mas principalmente o Claude para gerar ideias de código e sugestões de melhorias e o Gemini me ajudou a fazer o tema claro/escuro. Todo o código foi revisado e adaptado por mim, garantindo que o resultado final seja original e adequado às minhas necessidades.

// 1. Lógica para abrir/fechar o menu mobile
const btnMenu = document.getElementById('btn-menu');
const menuNav = document.getElementById('menu-nav');
const iconeMenu = document.getElementById('icone-menu');
const iconeTema = document.getElementById('icone-tema');
const iconeGithub = document.querySelector('.icone-github-card');

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
