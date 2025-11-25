// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // --- VARIÁVEIS DE CONTROLE ---
    const screens = document.querySelectorAll('.screen');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const logoutBtn = document.querySelector('.logout-btn');
    const uploadButtons = document.querySelectorAll('.upload-card .btn');

    // --- SISTEMA DE NAVEGAÇÃO FLUIDA ---
    window.showScreen = function(screenId) {
        screens.forEach(screen => {
            // Remove a classe 'active' de todas as telas
            screen.classList.remove('active');
        });

        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            // Adiciona 'active' na tela alvo para iniciar a transição CSS
            targetScreen.classList.add('active');
            
            // Garante que a nova tela comece no topo
            targetScreen.scrollTop = 0; 
        } else {
            console.error('Erro de Navegação: Tela não encontrada:', screenId);
        }
    };

    // --- SIMULAÇÃO DE LOGIN ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const btn = loginForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = 'Autenticando...';
            btn.disabled = true;

            // ⚠️ ATENÇÃO: AQUI VOCÊ DEVE INSERIR A CHAMADA REAL À SUA API DE BACKEND 
            setTimeout(() => {
                // Simulação de sucesso
                btn.innerText = originalText;
                btn.disabled = false;
                console.log('Login simulado com sucesso. Token fictício gerado.');
                showScreen('home-screen');
            }, 1500);
        });
    }

    // --- SIMULAÇÃO DE CADASTRO ---
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = signupForm.querySelector('button[type="submit"]');
            btn.innerText = 'Registrando...';
            btn.disabled = true;
            
             // ⚠️ ATENÇÃO: AQUI VOCÊ DEVE INSERIR A CHAMADA REAL À SUA API DE CADASTRO
            setTimeout(() => {
                btn.innerText = 'Cadastrar';
                btn.disabled = false;
                alert('Conta criada. Faça login para continuar.');
                showScreen('login-screen');
            }, 1500);
        });
    }

    // --- SIMULAÇÃO DE LOGOUT ---
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // ⚠️ AQUI DEVE IR A LÓGICA REAL DE DESTRUIR O TOKEN/SESSÃO
            if (confirm("Tem certeza que deseja sair?")) {
                showScreen('login-screen');
            }
        });
    }

    // --- INTERAÇÃO DOS UPLOADS (VERIFICAÇÃO) ---
    uploadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            // Verifica se já foi enviado
            if (this.classList.contains('uploaded')) return;

            this.innerText = 'Enviando...';
            this.style.backgroundColor = '#333';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Enviado';
                this.style.backgroundColor = '#00AA00'; 
                this.parentElement.style.borderColor = '#00AA00';
                this.classList.add('uploaded');
                this.disabled = false;
                alert("Documento enviado. Aguardando processamento (Simulado)");
            }, 1200);
        });
    });

    // --- OUTRAS INTERAÇÕES ---
    
    // Filtros
    const filterBtn = document.querySelector('.btn-filter');
    if(filterBtn) {
        filterBtn.addEventListener('click', () => {
            alert('Menu de Filtros (Simulado).');
        });
    }

    // Garante que a navegação comece na tela de login ao carregar
    showScreen('login-screen');
});
