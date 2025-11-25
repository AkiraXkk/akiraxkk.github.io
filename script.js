// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sistema de Navegação ---
    
    // Torna a função global para ser acessada pelos botões no HTML
    window.showScreen = function(screenId) {
        // Seleciona todas as telas
        const screens = document.querySelectorAll('.screen');
        
        // Remove a classe 'active' de todas
        screens.forEach(screen => {
            screen.classList.remove('active');
        });

        // Adiciona 'active' apenas na tela desejada
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            
            // Scrolla para o topo da nova tela (para sensação de fluidez)
            targetScreen.scrollTop = 0; 
        } else {
            console.error('Tela não encontrada:', screenId);
        }
    };

    // --- Simulação de Login ---
    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página
            
            const btn = loginForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            // Feedback visual
            btn.innerText = 'Autenticando...';
            btn.style.opacity = '0.7';

            // Simula delay de rede (1.5 segundos)
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.opacity = '1';
                
                // Redireciona para a home
                showScreen('home-screen');
            }, 1500);
        });
    }

    // --- Simulação de Cadastro ---

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = signupForm.querySelector('button[type="submit"]');
            btn.innerText = 'Criando conta...';
            
            setTimeout(() => {
                btn.innerText = 'Cadastrar';
                alert('Conta criada com sucesso! Faça login.');
                showScreen('login-screen');
            }, 1500);
        });
    }

    // --- Interação dos Uploads (Verificação) ---
    
    const uploadButtons = document.querySelectorAll('.upload-card .btn');
    uploadButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Simula seleção de arquivo
            this.innerText = 'Enviando...';
            this.style.backgroundColor = '#333';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Enviado';
                this.style.backgroundColor = '#00AA00'; // Verde sucesso
                this.parentElement.style.borderColor = '#00AA00';
            }, 1200);
        });
    });

    // --- Filtros (Exemplo visual) ---
    const filterBtn = document.querySelector('.btn-filter');
    if(filterBtn) {
        filterBtn.addEventListener('click', () => {
            alert('Filtros abertos! (Funcionalidade simulada)');
        });
    }

    // --- Inicialização ---
    // Garante que começamos na tela de login
    showScreen('login-screen');
});
