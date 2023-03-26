class ProductManager {
  static lastId = 0;
  constructor() {
    this.products = [];
  }
  getProducts() {
    console.log(this.products)
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.some(product => product.code === code)) {
      console.log("Ese código ya existe");
    } else {
      const newProduct = {
        id: ++ProductManager.lastId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
      this.products.push(newProduct);
    }
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      console.log("El producto es:", product.title);
    } else {
      console.log("ID Not found");
    }
  }
}


const prmanager = new ProductManager;
prmanager.getProducts(); //Lista de productos vacía
prmanager.addProduct('Destornillador', 'Destornillador plano', 500, 'sin imagen', 'destor123', 15) //Agregamos producto que tendrá id:1
prmanager.addProduct('Pinza ', 'Pinza de puntas', 2000, 'sin imagen', 'pinza4', 5) //Agregamos producto que tendrá id:2
prmanager.getProducts(); //Muestra los dos productos agregados
prmanager.addProduct('Pinza ', 'Pinza de puntas', 2000, 'sin imagen', 'pinza4', 5) //Agregamos un producto repetido, el cual arrojará error
prmanager.getProductById(1) // Muestra el nombre del producto con ID 1
prmanager.getProductById(2) // Muestra el nombre del producto con ID 2
prmanager.getProductById(3) // Arroja error ya que el producto con ID 3 aún no fué ingresado