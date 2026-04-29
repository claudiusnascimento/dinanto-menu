const menu = [
    {
        category: 'Agnolines',
        img: './images/agnoline.jpg',
        products: [
            {
                name: 'Frango',
                prices: [
                    { value: '72,00', weight: 'kg' },
                    { value: '30,00', weight: '400 g' }
                ]
            },
            {
                name: 'Carne',
                prices: [
                    { value: '86,00', weight: 'kg' },
                    { value: '35,00', weight: '400 g' }
                ]
            },
            {
                name: 'Queijo',
                prices: [
                    { value: '75,00', weight: 'kg' },
                    { value: '32,00', weight: '400 g' }
                ]
            }
        ]
    },
    {
        category: 'Especiais & Raviolis',
        img: './images/ravioli.jpg',
        products: [
            {
                name: 'Tortei de Moranga Cabotiá',
                prices: [
                    { value: '55,00', weight: 'kg' },
                    { value: '22,00', weight: '400 g' }
                ]
            },
            {
                name: 'Ravioli de Queijo **',
                prices: [
                    { value: '80,00', weight: 'kg' },
                    { value: '32,00', weight: '400 g' }
                ]
            },
            {
                name: 'Ravioli Espinafre com Ricota **',
                prices: [
                    { value: '70,00', weight: 'kg' },
                    { value: '28,00', weight: '400 g' }
                ]
            },
            {
                name: 'Ravioli Marguerita **',
                prices: [
                    { value: '75,00', weight: 'kg' },
                    { value: '30,00', weight: '400 g' }
                ]
            }
        ]
    },
    {
        category: 'Massas Longas',
        img: './images/macarronada.jpeg',
        products: [
            {
                name: 'Talharim / Espaguete',
                prices: [
                    { value: '45,00', weight: 'kg' },
                    { value: '18,00', weight: '400 g' }
                ]
            },
            {
                name: 'Linguini',
                prices: [
                    { value: '60,00', weight: 'kg' },
                    { value: '24,00', weight: '400 g' }
                ]
            }
        ]
    }
];

function renderMenu() {
    const menuWrapper = document.querySelector('.menu-wrapper');
    const categoriesHTML = menu.map(category => `
        <section class="category">
            <div class="category-header">
                <img src="${category.img}" alt="${category.category}" class="category-image" />
                <div class="category-line"></div>
                <h2 class="category-name">${category.category}</h2>
            </div>
            <div class="item-weights">
                <div>1Kg <span>|</span> 400g</div>
            </div>
            ${category.products.map(product => `
                <div class="item">
                    <span class="item-name">${product.name}</span>
                    <span class="item-dots"></span>
                    <div class="item-prices">
                        ${product.prices.map(price => `
                            <div class="price-tag">
                                <span class="price-value">R$ ${price.value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </section>
    `).join('');

    // Insere o conteúdo após o header
    const footer = menuWrapper.querySelector('.footer');
    const categoriesContainer = document.createElement('div');
    categoriesContainer.innerHTML = categoriesHTML;
    
    if (footer) {
        menuWrapper.insertBefore(categoriesContainer, footer);
    } else {
        menuWrapper.appendChild(categoriesContainer);
    }
}

// Renderiza o menu ao carregar a página
document.addEventListener('DOMContentLoaded', renderMenu);
