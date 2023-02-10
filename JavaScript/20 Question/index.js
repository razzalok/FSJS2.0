// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk','Coffee','Tea','Honey'];

function addToCart(){
    const isPresent = shoppingCart.includes('Meat');
    if(isPresent){
        console.log("Already present!");
    }else{
        shoppingCart.unshift('Meat');
    }

}

console.log(shoppingCart);
addToCart();
console.log(shoppingCart);
// addToCart();

function addToCartAtEnd(){
    const isPresent = shoppingCart.includes('Sugar');
    if(isPresent){
        console.log("Already present!");
    }else{
        shoppingCart.push('Sugar');
    }

}

addToCartAtEnd();
console.log(shoppingCart);

function removeItem(){
    const index = shoppingCart.indexOf('Honey');
    shoppingCart.splice(index,1);
}
removeItem();
console.log(shoppingCart);


function modifyItem(){
    const indexAt = shoppingCart.indexOf('Tea');
    shoppingCart[indexAt]='Green Tea';
    // shoppingCart.fill('Green Tea',indexAt);
}
modifyItem();
console.log(shoppingCart);