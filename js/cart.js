let prodAmount = document.getElementById("amount");

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(CART).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productOfCart = resultObj.data.articles;
            showCartProducts(productOfCart);
        }

        let prodCount = document.getElementsById("amount");
        for (let i = 0; i < prodCount.length; i++) {
            prodCount[i].addEventListener("input", function () {
                subtotalCost();
                
            });
        
        }
    })
})


function showCartProducts(cartProducts) {
    let htmlContentToAppend = "";

    for (let i = 0; i < cartProducts.length; i++) {
        let product = cartProducts[i];

        htmlContentToAppend += `
        <div class="d-flex justify-content-center" min-height: 100vh>
            <tr>
                <td> <img src=`+ product.image + ` style="width: 8.8rem;"> </td>
                <td> `+ product.name + ` </td>
                <td> `+ product.currency + " " + product.unitCost + ` </td>
                <td> <input id="amount" value= `+ product.count +` type="number" min="1" style="width:80px"> </td>
                <th> `+ product.currency + " " + + ` </th>
            </tr>
                   `
        document.getElementById("cart-list-products").innerHTML = htmlContentToAppend;
        subtotalCost();
    }
}

    function subtotalCost() {
        let total = 0;
        let subTotal = 0;
        let subTotalCost = document.getElementsByClassName("subTotalCost"); 
        let amount = document.getElementsByClassName("amount");
        let shippingCost = document.getElementById("shippingCost").value;
       
        for (let i = 0; i < cartProducts.length; i++) {
            let result; // Resultado del subtotal
            let result2; // Resultado del total final 

            let cost = cartProducts[i].unitCost;// Variable que contiene el costo unitario de los productos.
            cartProducts[i].count = count[i].value;// Variable que contiene el value del input de la cantidad de productos

            if (cartProducts[i].currency == 'UYU') {
                result = cost * cartProducts[i].count / 42;
            } else {
                result = cost * cartProducts[i].count;
            }

            subTotalCost[i].innerHTML = "USD" + result; // Agrega el subtotal al html
            subTotal += result; 

            if (shippingCost == 1) {
                result2 = result + (result * 0.05); // Standard
            } else if (shippingCost == 2) {
                result2 = result + (result * 0.07); // Express
            } else if (shippingCost == 3) {
                result2 = result + (result * 0.15); // Premium
            } else {
                result2 = result;
            }
    
            total += result2;
        }
        document.getElementById("subTotal").innerHTML = subTotal;// Agrega el total al html.
        document.getElementById("total").innerHTML = total;
        
    }
    
    