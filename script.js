console.log(`--------------------------------------
-------solution avec insertion--------
--------------------------------------`);
//Tabl PRODUITS
let products = [
	{ id: 0, title: 'Chaise Maxi Confort', nameId: 'chaise', price: 120.5, img: 'https://via.placeholder.com/150.png' },
	{ id: 1, title: 'Table en bois exotique', nameId: 'table', price: 1200.99, img: 'https://via.placeholder.com/150.png' },
	{ id: 2, title: 'Vase en céramique', nameId: 'vase', price: 420.01, img: 'https://via.placeholder.com/150.png' },
	{ id: 3, title: 'Canapé familial en laine', nameId: 'canape', price: 12585.55, img: 'https://via.placeholder.com/150.png' },
];

const wrapperHtml = document.getElementById('wrapper');
console.log('-----wrapperHtml:' + wrapperHtml);

//FUNCTION
function getPromoPrice(price, percent) {
	return price - (price * percent) / 100;
}
function roundDecimal(number) {
	return Math.ceil(number);
}
function formatPrice(price) {
	return price.toString().replace('.', ',') + ' €';
}
//Function boucle dans le tbl product pour insertion html
const insertProductsInHomePage = (productsList, htmlContainer) => {
	for (let i = 0; i < products.length; i++) {
		let reducPrice25 = getPromoPrice(productsList[i].price, 25);
		let roundReducPrice25 = roundDecimal(reducPrice25);
		let initialReducPrice = formatPrice(reducPrice25);
		//VAR Injection HTML
		htmlContainer.innerHTML += `
          <div class="product">
              <img src="${productsList[i].img}">
              <h2>${productsList[i].title}</h2>
              <span id="${productsList[i].nameId}">
                ${productsList[i].price}€<br>
                initial Price: ${Math.round(initialReducPrice, 2)}€<br>
                reduc Price: ${reducPrice25}€<br>
                soit: ${roundReducPrice25}€
              </span>
          </div>
        `;
	}
};

insertProductsInHomePage(products, wrapperHtml);
