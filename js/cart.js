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
    let subTotal = document.getElementById("subTotal"); //resultado del subtotal 
    let count = document.getElementById("amount"); // input cantidad de productos 
    let shippingCost = document.getElementById("shippingCost").value; //costo de envío

    for (let i = 0; i < productOfCart.length; i++) {
        let resultSubtotal; // resultado del subtotal
        let resultTotal; //resultado del total

        let cost = productOfCart[i].unitCost; // costo unitario por producto 
        productOfCart[i].count = count[i].value; // value del input, cantidad de productos

        if (productOfCart[i].currency == 'UYU') {
            resultSubtotal = cost * (productOfCart[i].count / 40);
        } else {
            resultSubtotal = cost * productOfCart[i].count;
        }

        subTotal[i].innerHTML = "USD" + resultSubtotal;
        almostTotal += resultSubtotal;

        //calcular porcentaje del precio de envío 
        if (shippingCost == 1) {
            resultTotal = resultSubtotal + (resultSubtotal * 0.15); //premium 
        } else if (shippingCost == 2) {
            resultTotal = resultSubtotal + (resultSubtotal * 0.07); //express
        } else if (shippingCost == 3) {
            resultTotal = resultSubtotal + (resultSubtotal * 0.05); //standard
        }
        finalTotal += resultTotal;
    }
    document.getElementById("subTotalCost").innerHTML = almostTotal; //agrego el subtotal 
    document.getElementById("total").innerHTML = finalTotal; // agrego el total
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productOfCart = resultObj.data.articles;

            showCartProducts(productOfCart);
        }
        let amount = document.getElementById("amount");

        //con el evento input calcular el subtotal cuando se cambia la cantidad 
        for (let i = 0; i < amount.length; i++) {
            amount[i].addEventListener("input", function () {
                subTotalCost();
            })
        }
    })
})
