let prodAmount = document.getElementById("amount");

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(CART).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productOfCart = resultObj.data.articles;
            showCartProducts(productOfCart);
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
                <td> <input id="amount" value="1" style="width:80px"> </td>
                <th onclick="calculateSubtotal" > `+ product.currency + " " + + ` </th>
            </tr>
                   `
        document.getElementById("cart-list-products").innerHTML = htmlContentToAppend;
    }
}

function calculateSubtotal(){

    for (let i = 0; i < cartProducts.length; i++) {
        prodAmount *  product.unitCost[i].addEventListener("input", function () {
        
    });

}}
