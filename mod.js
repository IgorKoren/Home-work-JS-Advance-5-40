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
  
  