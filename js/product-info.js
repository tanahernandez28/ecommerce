let productComments = [];
let productImages = [];
let relatedProducts = [];

document.addEventListener("DOMContentLoaded", function(){
    user.innerHTML = localStorage.getItem("username")
})

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            products = resultObj.data;
            showProductsInfo()
        }
    });
    getJSONData(LIST_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            images = resultObj.data.images;
            showProductsImages(images)          
        }
    });
    getJSONData(COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            comments = resultObj.data;
            showProductsComments(comments);
        }
    });
    getJSONData(LIST_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           let relatedProducts = resultObj.data.relatedProducts;
            showRelatedProducts(relatedProducts);
        }
    });
})

function showProductsInfo(){
    let htmlContentToAppend = "";

        htmlContentToAppend += `
                <br>
                <h1> `+ products.name +` </h1>
                <br>
                <hr> 
                <div>
                        <div class="mb-1">
                        <h5><b> `+ "Precio" +` </b></h5> 
                        <p> `+"UYU" + " " + products.cost +` </p> 
                        </div>
                        <div class="mb-1">
                        <h5><b> `+ "Descripción" +` </b></h5>
                        <p> `+ products.description +` </p>
                         </div>
                         <div class="mb-1">
                        <h5><b> `+ "Categoría" +` </b></h5>
                        <p> `+ products.category +` </p>
                         </div>
                         <div class="mb-1">
                        <h5><b>    `+ "Cantidad de vendidos" +` </b></h5>
                        <p> `+ products.soldCount +` </p>
                         </div>
                       <h5><b> `+ "Imágenes ilustrativas" +` </b></h5>
                    </div>
        `
        document.getElementById("prod-info-container").innerHTML = htmlContentToAppend;
    }

            
        function showProductsImages(productImages){
            let htmlContentToAppend = "";

            for (let i = 0; i < productImages.length; i++){
                let image = productImages[i];

                htmlContentToAppend += `
                <div class="d-flex">
                <a><img src= `+ image +` style="width: 20.20rem;" alt="product image" class="img-fluid" class="img-thumbnail"></a>
                </div>
                `
                document.getElementById("images").innerHTML = htmlContentToAppend;
        }
    }
    
    
    function showProductsComments(productComments){
        let htmlContentToAppend = "";

        for (let i = 0; i < productComments.length; i++){
            let comment = productComments[i];

            htmlContentToAppend += `
            
            <div class="list-group-item list-group-item-action">
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <p> <b> `+ comment.user +` </b> - `+ comment.dateTime +` -
                            `
                            for (let j = 0; j < 5; j++){
                                if (j <= comment.score - 1)
                                    htmlContentToAppend += `<span class="fa fa-star checked"></span>`
                                else 
                                    htmlContentToAppend+= `<span class="fa fa-star"></span>`
                            }

                          htmlContentToAppend+= `</p> 
                        <p>  `+ comment.description +` </p> 
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("comments").innerHTML = htmlContentToAppend; }
    }
          


    function showRelatedProducts(relatedProducts){
        let htmlContentToAppend = "";

        for (let i = 0; i < relatedProducts.length; i++){
            let relatedProduct = relatedProducts[i];
        htmlContentToAppend += `
    
        <div>
        <div class="card" style="width: 300px; margin-right: 50px;">
        <div class="card card-custom bg-white border-white border-0 cursor-active" onclick="setProdID( `+ relatedProduct.id +` )" >
            <img class="card-img-top img-fluid" src= `+ relatedProduct.image +` alt="Card Columns" style="width: 300px;" >
            <div class="card-body">
            <h5 class="card-title"> `+ relatedProduct.name +` </h5>
            </div>  
        </div>
        </div>
        </div>
        `
        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
         } }