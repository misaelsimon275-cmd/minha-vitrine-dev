// Declaração do uso de IA conforme exigido pelo SENAC:
// Ferramenta: Google Gemini AI

document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    function obterSaudacao(hora) {
        if (hora >= 5 && hora < 12) {
            return "Bom dia, eu sou o Misael";
        } else if (hora >= 12 && hora < 18) {
            return "Boa tarde, eu sou o Misael";
        } else {
            return "Boa noite, eu sou o Misael";
        }
    }

    const saudacaoElement = document.getElementById('saudacao');
    const horaAtual = new Date().getHours();
    saudacaoElement.textContent = obterSaudacao(horaAtual);

    const themeToggle = document.getElementById('theme-toggle');
    const temaSalvo = localStorage.getItem('tema') || 'light';

    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        localStorage.setItem('tema', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });

    const formContato = document.getElementById('form-contato');
    
    formContato.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let formularioValido = true;

        const campoNome = document.getElementById('nome');
        const campoEmail = document.getElementById('email');
        const campoMensagem = document.getElementById('mensagem');
        const checkConsentimento = document.getElementById('consentimento');

        const erroNome = document.getElementById('erro-nome');
        const erroEmail = document.getElementById('erro-email');
        const erroMensagem = document.getElementById('erro-mensagem');
        const erroConsentimento = document.getElementById('erro-consentimento');
        const sucessoMsg = document.getElementById('sucesso-msg');

        erroNome.textContent = '';
        erroEmail.textContent = '';
        erroMensagem.textContent = '';
        erroConsentimento.textContent = '';
        sucessoMsg.textContent = '';

        if (campoNome.value.trim() === '') {
            erroNome.textContent = 'Por favor, preencha seu nome.';
            formularioValido = false;
        }

        const valorEmail = campoEmail.value.trim();
        if (valorEmail === '' || !valorEmail.includes('@') || !valorEmail.includes('.')) {
            erroEmail.textContent = 'Informe um e-mail válido contendo "@" e ".".';
            formularioValido = false;
        }

        const valorMensagem = campoMensagem.value.trim();
        if (valorMensagem.length < 20) {
            erroMensagem.textContent = `A mensagem deve ter pelo menos 20 caracteres (atual: ${valorMensagem.length}).`;
            formularioValido = false;
        }

        if (!checkConsentimento.checked) {
            erroConsentimento.textContent = 'Você deve concordar com os termos para prosseguir.';
            formularioValido = false;
        }

        if (formularioValido) {
            sucessoMsg.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
            formContato.reset();
            
            setTimeout(() => {
                sucessoMsg.textContent = '';
            }, 5000);
        }
    });

    const anoAtualElement = document.getElementById('ano-atual');
    anoAtualElement.textContent = new Date().getFullYear();


    const projetos = [
        {
            titulo: "UC14 – HTML e CSS",
            descricao: "Projeto prático desenvolvido no curso focado em estruturação semântica avançada e estilização responsiva.",
            tecnologia: "HTML/CSS",
            link: "https://github.com/misaelsimon275-cmd"
        },
        {
            titulo: "KITAS AIR (Figma)",
            descricao: "Protótipo de alta fidelidade desenvolvido no Figma para o sistema de viagens KITAS AIR.",
            tecnologia: "Figma",
            link: "https://github.com/misaelsimon275-cmd"
        },
        {
            titulo: "História FC",
            descricao: "Aplicação web interativa focada em estatísticas e na história do futebol mundial.",
            tecnologia: "JavaScript",
            link: "https://github.com/misaelsimon275-cmd"
        }
    ];

    const gridProjetos = document.getElementById('projetos-grid');

    function renderizarProjetos(filtro = 'todos') {
        gridProjetos.innerHTML = '';
        
        projetos.forEach(projeto => {
            if (filtro === 'todos' || projeto.tecnologia === filtro) {
                const card = document.createElement('article');
                card.className = 'card-projeto';
                card.innerHTML = `
                    <div>
                        <span class="card-tag">${projeto.tecnologia}</span>
                        <h3>${projeto.titulo}</h3>
                        <p>${projeto.descricao}</p>
                    </div>
                    <a href="${projeto.link}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="margin-top: 1rem;">Acessar Repositório</a>
                `;
                gridProjetos.appendChild(card);
            }
        });
    }

    renderizarProjetos();

    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            botoesFiltro.forEach(b => b.classList.remove('active'));
            botao.classList.add('active');
            renderizarProjetos(botao.dataset.filtro);
        });
    });

    const btnTopo = document.getElementById('btn-topo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    });

    btnTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});