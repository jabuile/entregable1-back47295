class ProductManager {
    products;

        constructor(){
            this.products =[];
        }

        getProducts(){
            return this.products;
        }

        getProductById(id){
            let productId= this.products.find(p=>p.id==id);
            if (productId){
                return console.log(productId);
                
            }else{
                console.log("Not  found")
            }

        }


        addProduct(title, description,price, thumbnail,code,stock) {    
            if(this.products.length > 0){
                for(let productB of this.products){
                    if(code===productB.code){
                    /*return*/ console.log("codigo existente"); //ver si necesita o no return 
                    }
                }
            }

            if (!title || !description || !price || !thumbnail || !code || !stock){
                console.error("Campo incompleto");
                return
            }

            let id
            if (this.products.length === 0){
                id=1;
            }else{
                id=this.products.length + 1;
            }

            const newProduct ={
                id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            }
            this.products.push(newProduct);
        }


}

const product1 =new ProductManager();
product1.addProduct("herramienta","martillo", 10,"x", 2,5);
product1.addProduct("herramienta","pala", 50,"y", 3,6);
product1.addProduct("herramienta","pala", 50,"y", 6);
console.log(product1.getProducts())
product1.getProductById(2);