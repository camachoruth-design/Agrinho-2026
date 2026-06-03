// Mock Data - Baseado no conteúdo do PDF
const newsData = [
    {
        id: 1,
        title: "Agricultura de Precisão: O Futuro da Sustentabilidade",
        description: "Robôs, drones e sistemas autônomos aplicam água, fertilizantes e pesticidas de forma precisa, apenas onde e quando necessário.",
        category: "Agricultura",
        icon: "fa-tractor",
        stats: [
            { value: "-9%", label: "Herbicidas" },
            { value: "-6%", label: "Combustível" },
            { value: "+4%", label: "Produtividade" }
        ],
        isFeatured: true
    },
    {
        id: 2,
        title: "Robótica Industrial e Eficiência Energética",
        description: "Cobots consomem cerca de 500W, contra 2500W de robôs tradicionais, reduzindo significativamente o impacto ambiental.",
        category: "Robótica",
        icon: "fa-industry",
        stats: [
            { value: "-75%", label: "Pegada Carbono" },
            { value: "500W", label: "Consumo Cobots" }
        ],
        isFeatured: true
    },
    {
        id: 3,
        title: "Gestão Inteligente de Resíduos com Robôs",
        description: "Robôs identificam, separam e processam materiais recicláveis com alta eficiência, transformando resíduos orgânicos em adubo.",
        category: "Reciclagem",
        icon: "fa-recycle",
        stats: [
            { value: "80%", label: "Eficiência" },
            { value: "100%", label: "Automação" }
        ],
        isFeatured: true
    },
    {
        id: 4,
        title: "Monitoramento Ambiental com Drones e Robôs Subaquáticos",
        description: "Tecnologias avançadas monitoram ecossistemas, detectam vazamentos de óleo e avaliam a qualidade da água em tempo real.",
        category: "Meio Ambiente",
        icon: "fa-drone",
        stats: [
            { value: "24/7", label: "Monitoramento" },
            { value: "IoT", label: "Conectividade" }
        ],
        isFeatured: false
    },
    {
        id: 5,
        title: "Energia Renovável: Manutenção Autônoma",
        description: "Robôs inspecionam e mantêm turbinas eólicas e painéis solares em locais de difícil acesso, maximizando a eficiência.",
        category: "Energia",
        icon: "fa-solar-panel",
        stats: [
            { value: "30%", label: "Eficiência" },
            { value: "Autônomo", label: "Operação" }
        ],
        isFeatured: false
    },
    {
        id: 6,
        title: "Logística e Transporte com Baixa Emissão",
        description: "Veículos autônomos otimizam rotas, reduzem congestionamentos e permitem sistemas de compartilhamento, baixando emissões de CO₂.",
        category: "Logística",
        icon: "fa-truck-fast",
        stats: [
            { value: "40%", label: "Redução CO₂" },
            { value: "Autônomo", label: "Navegação" }
        ],
        isFeatured: false
    },
    {
        id: 7,
        title: "Desafios e Considerações da Automação Sustentável",
        description: "Consumo energético na fabricação de robôs pode ser mitigado com energias renováveis e designs eficientes.",
        category: "Tecnologia",
        icon: "fa-microchip",
        stats: [
            { value: "Renovável", label: "Energia Limpa" },
            { value: "Reciclável", label: "Design" }
        ],
        isFeatured: false
    },
    {
        id: 8,
        title: "Economia Circular e Robótica",
        description: "A robótica é aliada fundamental na transição para uma economia circular e de baixo carbono, especialmente com energias limpas.",
        category: "Sustentabilidade",
        icon: "fa-chart-line",
        stats: [
            { value: "Circular", label: "Economia" },
            { value: "Net Zero", label: "Carbono" }
        ],
        isFeatured: false
    }
];

// Dark Mode Functions
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }
}

// Mobile Menu Functions
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// Render News Cards
function renderFeaturedNews() {
    const featuredContainer = document.getElementById('featuredNews');
    if (!featuredContainer) return;
    
    const featuredNews = newsData.filter(news => news.isFeatured === true);
    
    featuredContainer.innerHTML = featuredNews.map(news => `
        <article class="news-card" data-id="${news.id}">
            <div class="card-icon">
                <i class="fas ${news.icon}"></i>
            </div>
            <div class="card-content">
                <span class="card-category">${news.category}</span>
                <h3>${news.title}</h3>
                <p>${news.description.substring(0, 100)}${news.description.length > 100 ? '...' : ''}</p>
                <div class="card-stats">
                    ${news.stats.map(stat => `<span class="stat-badge">${stat.value} ${stat.label}</span>`).join('')}
                </div>
                <a href="#" class="read-more">Leia mais <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
}

function renderNewsFeed() {
    const newsContainer = document.getElementById('newsGrid');
    if (!newsContainer) return;
    
    const regularNews = newsData.filter(news => news.isFeatured !== true);
    
    newsContainer.innerHTML = regularNews.map(news => `
        <article class="news-card" data-id="${news.id}">
            <div class="card-icon">
                <i class="fas ${news.icon}"></i>
            </div>
            <div class="card-content">
                <span class="card-category">${news.category}</span>
                <h3>${news.title}</h3>
                <p>${news.description.substring(0, 100)}${news.description.length > 100 ? '...' : ''}</p>
                <div class="card-stats">
                    ${news.stats.map(stat => `<span class="stat-badge">${stat.value} ${stat.label}</span>`).join('')}
                </div>
                <a href="#" class="read-more">Leia mais <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
}

// Add click handlers to cards
function initCardClickHandlers() {
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.news-card');
        if (card) {
            const newsId = card.dataset.id;
            const news = newsData.find(n => n.id == newsId);
            if (news) {
                showNewsModal(news);
            }
        }
    });
}

// Modal for news details
function showNewsModal(news) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.news-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'news-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-icon">
                <i class="fas ${news.icon}"></i>
            </div>
            <span class="modal-category">${news.category}</span>
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <div class="modal-stats">
                <h3>Impactos Estimados</h3>
                <div class="stats-grid">
                    ${news.stats.map(stat => `
                        <div class="stat-card">
                            <span class="stat-value">${stat.value}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-footer">
                <p><i class="fas fa-leaf"></i> Tecnologia para um futuro sustentável</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add close handlers
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    const closeModal = () => {
        modal.remove();
        document.body.style.overflow = '';
    };
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Close on ESC key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Add modal styles dynamically
function addModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .news-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
        }
        
        .modal-content {
            position: relative;
            background: var(--bg-primary