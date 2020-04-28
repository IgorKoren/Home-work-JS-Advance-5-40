import * as modShop from './mod.js'

export let getId = x => document.getElementById(x);
export let getSel = x => document.querySelector(x)

export let formBalance = document.forms['formBalance']
export let formShop = document.forms['formShop']

export let orderedProducts = [];
export let orderPre =[];
export let selectedProduct;
export let selectproductCount;
export let zahalnaSuma = 0;



formShop.formShopCount.value = 0

export let balance = 1000;

export let products = {
    beer: {
        article: 'beer',
        name: 'Пиво',
        price: 50,
        count: 100
    },
    vine: {
        article: 'vine',
        name: 'Вино',
        price: 50,
        count: 50
    },
    pepsi: {
        article: 'pepsi',
        name: 'Пепсі',
        price: 50,
        count: 80
    }
}


renderBalanse()

function renderBalanse() {
    // console.log(products);
    getId('formBalanceBalance').value = balance + ' грн.';
    getId('formBalanceBear').value = products.beer.count + ' шт.';
    getId('formBalanceVine').value = products.vine.count + ' шт.';
    getId('formBalancePepsi').value = products.pepsi.count + ' шт.';
}

// console.log(formShop.formShopCount.value);


function setProduct() {
    console.log(this);
    
    selectedProduct = this.value;
    console.log(selectedProduct);
}


getId('inlineRadio1').addEventListener('click', setProduct);
getId('inlineRadio2').addEventListener('click', setProduct);
getId('inlineRadio3').addEventListener('click', setProduct);



function addBtnOnclick() {
    console.log("selectedProduct  ---  " + selectedProduct);
    if (selectedProduct == undefined) {
        console.log('Виберіть продукт!');
        getId('modalText').innerText = `Виберіть продукт! `
        $('#myModal').modal('show')
    } else if ((formShop.formShopCount.value * products[selectedProduct].price ) > balance){
        console.log('У вас на балансі немає так багато грошей');
        getId('modalText').innerText = `У вас на балансі немає так багато грошей, щоб купити ${formShop.formShopCount.value} пляшок ${products[selectedProduct].name} !`
        $('#myModal').modal('show')
    }
    else if (formShop.formShopCount.value > 0) {
        console.log('виконується оператор IF');
        if (products[selectedProduct].count >= formShop.formShopCount.value ) {
            modShop.addToOrder(selectedProduct, formShop.formShopCount.value)
            modShop.renderBalanse()
            modShop.renderOrderTemp()
        } else {
            getId('modalText').innerText = `На складі немає такої кількості - ${formShop.formShopCount.value} вибраного вами товару (${products[selectedProduct].name}). Цього товару є лише ${products[selectedProduct].count} !`
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
   console.log('orderedProducts.length ' + orderedProducts.length);
    orderedProducts.forEach(ShowResults)
    getId('outputplace').innerHTML += `<hr><p class="mb-2 mt-2"><strong>Загальна вартість: ${zahalnaSuma} шт.</strong></p>  `
   
}
getId('bayBtn').addEventListener('click', bayBtnFun);




