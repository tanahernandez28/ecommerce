document.addEventListener("DOMContentLoaded", function () {
    getJSONData(CART).then (function (resultObj) {
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
        <tr>
        <td> <img src= `+ product.image + ` style="width: 8.8rem;" > </td>
        <td> `+ product.name + ` </td>
        <td> `+ product.currency + " " + product.unitCost+` </td>
        <td>  <input value="1" style="width:80px">  </td>
        <th id="subTotalPrice"> `+ product.currency + " " + product.unitCost+` </th>
        </tr>
        </div>`
        document.getElementById("cart-list-products").innerHTML = htmlContentToAppend;
    }
}