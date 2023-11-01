class ProductManager{
    constructor(){
        this.products = []
        this.lastId = 0
    }

    addProduct(title,description,price,thumbnail,code,stock){
        // Valido que todos los campos sean obligatorios
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("\n ❌ ERROR: Debe rellenar todos los campos (OBLIGATORIO) ❌")
            return
        }
        // Valido que no se repita el campo "code"
        const existingProduct = this.products.find((product) => product.code === code)
        if(existingProduct){
            console.log(`\n ❌ ERROR: ya hay un producto con el código "${code}" ❌`)
            return
        }

        const newProduct ={
            id: ++this.lastId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct)
        
    }
    
    /* [[[IBA ARRIBA]]] console.log(`El producto fue agregado: ${JSON.stringify(newProduct)}`) */

    getProducts(){
        return this.products
    }

    getProductsById(id){
        const product = this.products.find((product) => product.id === id)
        if(!product){
            console.log("Not found")
            console.log(`No fue encontrado ningun producto con el id ${id}.`)
        }
        return product
    }
}

// 🔨🔧 PRUEBAS DE FUNCIONAMIENTO 🔧🔨 // 🔨🔧 PRUEBAS DE FUNCIONAMIENTO 🔧🔨 // 🔨🔧 PRUEBAS DE FUNCIONAMIENTO 🔧🔨 //

const productManager = new ProductManager()

productManager.addProduct(
        "Leche La Serenisima", 
        "Leche descremada", 
        79,
        "https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/i/m/imageedit_1_4837957539.png",
        "abc123", /* CODE REPETIDO */
        25
    )

productManager.addProduct("Arroz Gallo","Arroz Largo y Fino", 54,"❌ Sin Imagen ❌",
"abc123", /* PRODUCTO FALLA X MISMO CODE REPETIDO */
13) 

productManager.addProduct("Auriculares Noga", "Auriculares inalamrbicos de calidad", 160,"https://www.sevenelectronics.com.ar/images/000779813771393377614600-750-NG-BT-469-RJ.jpg",
"zxy987", /* CODE UNICO, PRODUCTO BUSCADO POR ID (2) */
34)

productManager.addProduct("Microfono Blue Yeti","Microfono con gran calidad de captura y transmision de sonido", undefined ,"https://http2.mlstatic.com/D_NQ_NP_993032-MLA51056198917_082022-O.webp","gbe330",34)
/* PRODUCTO CON UN CAMPO SIN LLENAR */

const allProducts = productManager.getProducts()
console.log("");
console.log("Todos los productos",allProducts)

console.log("\n");
/* console.log(""); */

let productById = productManager.getProductsById(2)
console.log("Producto buscado por id ⬇️  ⬇️  ⬇️  ⬇️  \n" ,productById, "\n ⬆️  ⬆️  ⬆️  ⬆️  ⬆️  ⬆️  ⬆️  ⬆️  ⬆️  ⬆️  ⬆️  ⬆️  ")

console.log("");
productById = productManager.getProductsById(4)
console.log("");

// 🔨🔧 PRUEBAS DE FUNCIONAMIENTO 🔧🔨 // 🔨🔧 PRUEBAS DE FUNCIONAMIENTO 🔧🔨 // 🔨🔧 PRUEBAS DE FUNCIONAMIENTO 🔧🔨 //