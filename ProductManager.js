//--------------------- ENTREGA 1 --------------------- //
//let products = [];

class ProductManager{
    constructor(){
        this.products = [];
    }
    getProducts = ()=>this.products
    getProductbyId = (id)=>{
        const productDb = this.products.find(product=>product.id==id);
        if(!productDb){
            return `no existe el producto con id: ${id}`
        }
        return null;
    }

    addProduct = (newItem)=>{
        const productDb = this.products.find(product => product.code === newItem.code);

        //  Validaciones de product
         if (productDb) {
            return 'se encuentra el producto'
         }

         if (newItem.title === ''){
            return 'completar con titulo'
         }

         if (this.products.length===0){
            newItem.id = 1
            this.products.push(newItem)
        } else {                                           //Id del producto con autoincrementacion
        this.products =[... this.products, { ... newItem, id:this.products[this.products.length - 1].id + 1 }]}
    }
}

  const productos = new ProductManager();

console.log(productos.addProduct({
    title: 'pencil',
    description: 'pencil of graphite',
    price: 5,
    thumnail: 'path of image',
    code: 1,
    stock: 1000
}))

console.log(productos.addProduct({
    title: 'pencil',
    description: 'pencil of graphite',
    price: 5,
    thumnail: 'path of image',
    code: 1,
    stock: 1000
}))

 console.log(productos.getProducts())