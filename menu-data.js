const menu = [
    {
        category: 'Massas Lisas',
        products: [
            {
                name: 'Espaguete',
                prices: [
                    { value: '18,00', weight: '1 kg' },
                    { value: '8,00', weight: '400 g' }
                ]
            },
            {
                name: 'Talharim',
                prices: [
                    { value: '18,00', weight: '1 kg' },
                    { value: '8,00', weight: '400 g' }
                ]
            },
            {
                name: 'Fetuccine',
                prices: [
                    { value: '20,00', weight: '1 kg' },
                    { value: '9,00', weight: '400 g' }
                ]
            },
            {
                name: 'Linguine',
                prices: [
                    { value: '20,00', weight: '1 kg' },
                    { value: '9,00', weight: '400 g' }
                ]
            }
        ]
    },
    {
        category: 'Massas Recheadas',
        products: [
            {
                name: 'Capeletti de Carne',
                prices: [
                    { value: '28,00', weight: '1 kg' },
                    { value: '12,00', weight: '400 g' }
                ]
            },
            {
                name: 'Capeletti de Frango',
                prices: [
                    { value: '28,00', weight: '1 kg' },
                    { value: '12,00', weight: '400 g' }
                ]
            },
            {
                name: 'Tortellini de Queijo',
                prices: [
                    { value: '30,00', weight: '1 kg' },
                    { value: '13,00', weight: '400 g' }
                ]
            },
            {
                name: 'Ravioli de Ricota e Espinafre',
                prices: [
                    { value: '32,00', weight: '1 kg' },
                    { value: '14,00', weight: '400 g' }
                ]
            }
        ]
    },
    {
        category: 'Massas Especiais',
        products: [
            {
                name: 'Nhoque de Batata',
                prices: [
                    { value: '22,00', weight: '1 kg' },
                    { value: '10,00', weight: '400 g' }
                ]
            },
            {
                name: 'Lasanha (folhas)',
                prices: [
                    { value: '25,00', weight: '1 kg' },
                    { value: '11,00', weight: '400 g' }
                ]
            },
            {
                name: 'Fusilli Integral',
                prices: [
                    { value: '24,00', weight: '1 kg' },
                    { value: '11,00', weight: '400 g' }
                ]
            },
            {
                name: 'Pappardelle ao Açafrão',
                prices: [
                    { value: '35,00', weight: '1 kg' },
                    { value: '16,00', weight: '400 g' }
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
                <h2 class="category-name">${category.category}</h2>
                <div class="category-line"></div>
            </div>
            ${category.products.map(product => `
                <div class="item">
                    <span class="item-name">${product.name}</span>
                    <span class="item-dots"></span>
                    <div class="item-prices">
                        ${product.prices.map(price => `
                            <div class="price-tag">
                                <span class="price-value">R$ ${price.value}</span>
                                <span class="price-weight">${price.weight}</span>
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
