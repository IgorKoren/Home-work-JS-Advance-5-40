import * as modShop from './mod.js'

 let getId = x => document.getElementById(x);
 let getSel = x => document.querySelector(x)

console.log(modShop.balance);
console.log(modShop);


formShop.formShopCount.value = 0






renderBalanse()

function renderBalanse() {
    // console.log(products);
    getId('formBalanceBalance').value = modShop.balance + ' грн.';
    getId('formBalanceBear').value = modShop.products.beer.count + ' шт.';
    getId('formBalanceVine').value = modShop.products.vine.count + ' шт.';
    getId('formBalancePepsi').value = modShop.products.pepsi.count + ' шт.';
}

function setProduct() {
    console.log(this.value);
    modShop.setselectedProduct(this.value);
    console.log("modShop.selectedProduct --"  + modShop.selectedProduct);
}


getId('inlineRadio1').addEventListener('click', setProduct);
getId('inlineRadio2').addEventListener('click', setProduct);
getId('inlineRadio3').addEventListener('click', setProduct);



function addBtnOnclick() {
    console.log("modShop.selectedProduct  ---  " + modShop.selectedProduct);
    if (modShop.selectedProduct == undefined) {
        console.log('Виберіть продукт!');
        getId('modalText').innerText = `Виберіть продукт! `
        $('#myModal').modal('show')
    } else if ((formShop.formShopCount.value * modShop.products[modShop.selectedProduct].price ) > modShop.balance){
        console.log('У вас на балансі немає так багато грошей');
        getId('modalText').innerText = `У вас на балансі немає так багато грошей, щоб купити ${formShop.formShopCount.value} пляшок ${ modShop.products[ modShop.selectedProduct].name} !`
        $('#myModal').modal('show')
    }
    else if (formShop.formShopCount.value > 0) {
        console.log('виконується оператор IF');
        if ( modShop.products[ modShop.selectedProduct].count >= formShop.formShopCount.value ) {
            modShop.addToOrder( modShop.selectedProduct, formShop.formShopCount.value)
            renderBalanse()
            modShop.renderOrderTemp()
        } else {
            getId('modalText').innerText = `На складі немає такої кількості - ${formShop.formShopCount.value} вибраного вами товару (${ modShop.products[ modShop.selectedProduct].name}). Цього товару є лише ${ modShop.products[modShop.selectedProduct].count} !`
            $('#myModal').modal('show')
        }
    } else if (formShop.formShopCount.value <= 0) {
        console.log('Виконується елсе');
        getId('modalText').innerText = 'Кількість товару має бути більше 0 !'
        $('#myModal').modal('show')

    } 
}

getId('addBtn').addEventListener('click', addBtnOnclick);


function bayBtnFun(){
   console.log('orderedProducts.length ' +  modShop.orderedProducts.length);
   modShop.orderedProducts.forEach( modShop.ShowResults)
    getId('outputplace').innerHTML += `<hr><p class="mb-2 mt-2"><strong>Загальна вартість: ${ modShop.zahalnaSuma} шт.</strong></p>  `
   
}
getId('bayBtn').addEventListener('click', bayBtnFun);




