var productOfCart = [];

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
                <td> <input id="amount" value="`+ product.count + `"  type="number" min="1" style="width:80px"> </td>
                <th id="subTotal"> `+ product.currency + " " + product.unitCost + ` </th>
            </tr>
                   `
    }
    document.getElementById("cart-list-products").innerHTML = htmlContentToAppend;
    subTotalCost();
}

function subTotalCost() {
    let finalTotal = 0;
    let almostTotal = 0;
    let shippingCostValue = 0;
    let subTotal = document.getElementById("subTotal"); //donde voy a poner el resultado del subtotal 
    let count = document.getElementById("amount").value; //input cantidad de productos 
    let shippingCost = document.getElementById("shippingCost").value; //opción de costo de envío

    for (let i = 0; i < productOfCart.length; i++) {
        let resultSubtotal; // resultado del subtotal
        let resultTotal; //resultado del total

        let cost = productOfCart[i].unitCost; // costo unitario por producto 
        productOfCart[i].count = count; // value del input, cantidad de productos

        if (productOfCart[i].currency == 'UYU') {
            resultSubtotal = cost * (productOfCart[i].count / 40);
        } else {
            resultSubtotal = cost * productOfCart[i].count;
        }

        subTotal.innerHTML = "USD" + resultSubtotal;
        almostTotal += resultSubtotal;
        resultTotal = resultSubtotal;

        //calcular porcentaje del precio de envío 
        if (shippingCost == 1) {
            shippingCostValue = parseInt(resultSubtotal * 0.15) //premium
            resultTotal = resultSubtotal + shippingCostValue;
        } else if (shippingCost == 2) {
            shippingCostValue = parseInt(resultSubtotal * 0.07)
            resultTotal = resultSubtotal + shippingCostValue; //express
        } else if (shippingCost == 3) {
            shippingCostValue = parseInt(resultSubtotal * 0.05)
            resultTotal = resultSubtotal + shippingCostValue; //standard
        }
        shippingCostValue = shippingCostValue;
        finalTotal += resultTotal;
    }
    document.getElementById("subTotalCost").innerHTML = almostTotal; //agrego el subtotal al final del html 
    document.getElementById("shippingCostValue").innerHTML = shippingCostValue; //agrego el costo del envío al final del html
    document.getElementById("total").innerHTML = finalTotal; // agrego el total al final del html
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productOfCart = resultObj.data.articles;

            showCartProducts(productOfCart);
        }
        let amount = document.getElementById("amount");

        //con el evento input calcular el subtotal cuando se cambia la cantidad 
        for (let i = 0; i < amount.value; i++) {
            amount.addEventListener("input", function () {
                subTotalCost();
            })
        }
    })
})

let accountNumer = document.getElementById("accountNumer");
let cardNumber = document.getElementById("cardNumber");
let securityCode = document.getElementById("securityCode");
let expiration = document.getElementById("expiration");
let shippingDirection = document.getElementById("shippingDirection").value;
let shippingNumber = document.getElementById("shippingNumber").value;
let shippingCorner = document.getElementById("shippingCorner").value;

document.getElementById("closeModal").addEventListener("click", function(){
    if ((cardNumber.length >= 13 && cardNumber.length <= 18 && (securityCode.length === 3 || securityCode.length === 4) && expiration.length === 5) || (accountNumer >= 6 && accountNumer <= 20)){
        document.getElementById("modal").classList.remove("text-danger")
    }
})

document.getElementById("creditCard").addEventListener("click", function () {
    accountNumer.setAttribute("disabled", "true")
    cardNumber.removeAttribute("disabled")
    securityCode.removeAttribute("disabled")
    expiration.removeAttribute("disabled")
})
document.getElementById("bankAccount").addEventListener("click", function () {
    accountNumer.removeAttribute("disabled")
    cardNumber.setAttribute("disabled", "true")
    securityCode.setAttribute("disabled", "true")
    expiration.setAttribute("disabled", "true")
})

function validateForm() {
    if(shippingDirection.length > 0 && shippingCorner.length <0 && shippingNumber.length > 0) {
        if (cardNumber.length >= 13 && cardNumber.length <= 18 && securityCode.length === 3 || securityCode.length === 4 && expiration.length === 5) {
            comprar()
        } else if (accountNumer >= 6 && accountNumer <= 20){
            comprar()
        }
    }
}

function comprar() {
    document.getElementById("successful").classList.add("show")
}