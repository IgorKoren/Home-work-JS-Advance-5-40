

export let getId = x => document.getElementById(x);
export let getSel = x => document.querySelector(x)

export let formBalance = document.forms['formBalance']
export let formShop = document.forms['formShop']

export let orderedProducts = [];
export let orderPre =[];
export let selectedProduct;
export let selectproductCount;
export let zahalnaSuma = 0;



export let balance = 1000;


// console.log('formShop.formShopCount.value --------' + formShop.formShopCount.value);

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

export function setselectedProduct(x){
    selectedProduct = x;
}

export function addToOrder() {
      orderPre = [selectedProduct, formShop.formShopCount.value];
      orderedProducts.push(orderPre);
      console.log(orderedProducts);
      console.log(products[selectedProduct].name);
      products[selectedProduct].count -= formShop.formShopCount.value;
      console.log('На складі залишилось товару -' +  products[selectedProduct].name + '   --- ' +  products[selectedProduct].count + ' штук');
      balance -=  formShop.formShopCount.value *  products[selectedProduct].price;
      zahalnaSuma += formShop.formShopCount.value *  products[selectedProduct].price;
      console.log('Загальна сума покупки = ' + zahalnaSuma);
      
      
  }
  
  export function renderOrderTemp() {
      // console.log(products[selectedProduct].count);
      getId('formShopSuma').innerHTML +=`<p class="mb-2 mt-2">${products[selectedProduct].name}: ${formShop.formShopCount.value}</p>  `
  }
  
  export function ShowResults(value, index) {
      getId('outputplace').innerHTML ='';
      // console.log("value: " + value + " index: " + index);
      // console.log(products[value[0]].name);
      
      orderedProducts.forEach(function(value, index){
          console.log("value: " + value + " index: " + index);
          console.log(products[value[0]].name);
          getId('outputplace').innerHTML += `<p class="mb-2 mt-2">${products[value[0]].name}: ${value[1]} шт.</p>  `
      })
     
  }
  
  