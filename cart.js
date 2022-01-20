var hapus;

removeItem('store1-remove', 'store1-area');
removeItem('phone-remove', 'phone-area');
removeItem('case-remove', 'case-area');
removeItem('cg-remove', 'cg-area');
removeItem('store2-remove', 'store2-area');
removeItem('GTA-remove', 'GTA-area');
removeItem('BTF-remove', 'BTF-area');
removeItem('FC-remove', 'FC-area');
removeItem('store3-remove', 'store3-area');
removeItem('hoodie-remove', 'hoodie-area');
removeItem('jacket-remove', 'jacket-area');
removeItem('store4-remove', 'store4-area');
removeItem('ironman-remove', 'ironman-area');
removeItem('bp-remove', 'bp-area');
removeItem('store5-remove', 'store5-area');
removeItem('s21-remove', 's21-area');
removeItem('rog-remove', 'rog-area');

function productUpdate(product, isIncrease, price, sub){

    const productInput = document.getElementById(product);
    const productCount = parseInt(productInput.value);
    
    let newProductCount = productCount;

    if(isIncrease == true){

        newProductCount = productCount + 1;
    }

    else if(isIncrease == false && productCount > 0){
        newProductCount = productCount - 1;
    }
    productInput.value = newProductCount;

    const productPrice = newProductCount * price;
    document.getElementById(product + '-price').innerText = productPrice;
   
    calculateTotal()

   
}

function calculateTotal(){

    const phonePrice = getInput('phone');
    const casePrice = getInput('case');
    const cgPrice = getInput('cg');
    const GTAPrice = getInput('GTA');
    const BTFPrice = getInput('BTF');
    const FCPrice = getInput('FC');
    const hoodiePrice = getInput('hoodie');
    const jacketPrice = getInput('jacket');
    const ironmanPrice = getInput('ironman');
    const bpPrice = getInput('bp');
    const s21Price = getInput('s21');
    const rogPrice = getInput('rog');

 

    // const subtotalPrice = phonePrice * 1219 + casePrice * 59;

    // document.getElementById('subtotal').innerText = subtotalPrice;

    const totalPrice = phonePrice * 1219 + casePrice * 59 + cgPrice *50 + GTAPrice*21 + BTFPrice *45 + FCPrice *35 + hoodiePrice *30 + jacketPrice *31 +ironmanPrice *10 +bpPrice *11 + s21Price * 696 + rogPrice *1044;

    document.getElementById('total').innerText = totalPrice;

    // const taxPrice = Math.round(subtotalPrice * .05);

    // document.getElementById('tax').innerText = taxPrice;

    // const totalPrice = subtotalPrice;
    
    // document.getElementById('total').innerText = totalPrice;


}

function getInput(product){

    const productInput = document.getElementById(product);
    const productCount = parseInt(productInput.value);

    return productCount;
}

//remove item

function removeItem(productRemove, productArea){

    document.getElementById(productRemove).addEventListener('click', function(){

        hapus = confirm('Are You Sure You Want to delete');
        if(hapus){
            document.getElementById(productArea).style.display = 'none';
        }
        else{

        }
        // document.getElementById('product-calculation').style.display = 'none';
    })
}

//checkout

document.getElementById('checkout').addEventListener('click', function(){

    document.getElementById('main-area').style.display = 'none';
    document.getElementById('next-page').style.display = 'block';
})