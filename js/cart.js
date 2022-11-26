var productOfCart = [];
let cart = document.getElementById("cart-list-products");
let form = document.getElementById("form");////????
let accountNumber = document.getElementById("accountNumber");
let cardNumber = document.getElementById("cardNumber");
let securityCode = document.getElementById("securityCode");
let expiration = document.getElementById("expiration");
let checkboxCreditCard = document.getElementById("creditCard");
let checkboxBankAccount = document.getElementById("bankAccount");
let successful = document.getElementById("successful");////????
let closeCartAlert = document.getElementById("closeAlert");///????
let paidMethodText = document.getElementById("paidMethodText");


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
    cart.innerHTML = htmlContentToAppend;
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

        subTotal.innerHTML = "USD" + " " + resultSubtotal;
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
    document.getElementById("subTotalCost").innerHTML = "USD" + " " + almostTotal; //agrego el subtotal al final del html 
    document.getElementById("shippingCostValue").innerHTML = "USD" + " " + shippingCostValue; //agrego el costo del envío al final del html
    document.getElementById("total").innerHTML = "USD" + " " + finalTotal; // agrego el total al final del html
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


// tarjeta de crédito o cuenta bancaria 
checkboxCreditCard.addEventListener("click", function () {
    accountNumber.setAttribute("disabled", "true")
    cardNumber.removeAttribute("disabled")
    securityCode.removeAttribute("disabled")
    expiration.removeAttribute("disabled")
})
checkboxBankAccount.addEventListener("click", function () {
    accountNumber.removeAttribute("disabled")
    cardNumber.setAttribute("disabled", "true")
    securityCode.setAttribute("disabled", "true")
    expiration.setAttribute("disabled", "true")
})


function selectPaidMethod() {

    let accountNumberValue = document.getElementById("accountNumber").value;
    let invalidText = document.getElementById("invalidText");
    let cardNumberValue = document.getElementById("cardNumber").value;
    let securityCodeValue = document.getElementById("securityCode").value;
    let expirationValue = document.getElementById("expiration").value;

    if (checkboxCreditCard.checked === false && checkboxBankAccount.checked === false) {
        modalSelect.classList.remove("is-valid");
        modalSelect.classList.add("is-invalid");
    } else {
        modalSelect.classList.remove("is-valid");
        modalSelect.classList.add("is-valid");
    }

    if (checkboxBankAccount.checked === true) {
        modalSelect.classList.remove("is-invalid");
        modalSelect.classList.add("is-valid");
        paidMethodText.innerHTML = "Transferencia bancaria"

        if (accountNumberValue > 5 && accountNumberValue < 21) {
            invalidText.innerHTML = "Ingrese su número de cuenta";
        } else {
            invalidText.innerHTML = "";
        }
    }

    if (checkboxCreditCard === true) {
        modalSelect.classList.remove("is-invalid");
        modalSelect.classList.add("is-valid");
        paidMethodText.innerHTML = "Tarjeta de crédito"

        if ((cardNumberValue > 12 && cardNumberValue < 19) && (securityCodeValue === 3 || securityCodeValue === 4) && (expirationValue === 5)) {
            invalidText.innerHTML = "Ingrese los datos de su tarjeta"
        } else invalidText.innerHTML = "";
    }

}