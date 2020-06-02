var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "organic eggs",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 3.29
	},
	{
		name: "organic bananas",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 2.09
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.25
	},	
	{
		name: "meat pie",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 8.35
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.19
	},
	{
		name: "organic fruit juice",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.25
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 7.23
	},
	{
		name: "organic flour",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 7.99
	},
	
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GV") && (prods[i].glutenFree == true) &&  (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GO") && (prods[i].glutenFree == true) &&  (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "VO") && (prods[i].vegetarian == true) &&  (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if((restriction == "GVO") && (prods[i].organic == true) && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) ){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}