// _____    _____   _____    _  __             _   _    _____ 
// |  __ \  |_   _| |  __ \  | |/ /     /\     | \ | |  / ____|
// | |  | |   | |   | |__) | | ' /     /  \    |  \| | | (___  
// | |  | |   | |   |  _  /  |  <     / /\ \   | . ` |  \___ \ 
// | |__| |  _| |_  | | \ \  | . \   / ____ \  | |\  |  ____) |
// |_____/  |_____| |_|  \_\ |_|\_\ /_/    \_\ |_| \_| |_____/ 
//            by Pablo Ambrosio
//    Visit http://www.dirkans.com



/*  class Contador {
    static cuentaGeneral = 0;
    constructor(responsable) {
      this.cuenta = 0;
      this.responsable = responsable;
      this.cuentaPersonal = 0;
      
    }
    getResponsable() {
      return this.responsable;
    } 
    getCuentaIndividual() {
      return this.cuentaPersonal;
    }
    static getCuentaGlobal() {
      return Contador.cuentaGeneral;
    }
  }
  
  const responsable1 = new Contador('Carlos');
  const responsable2 = new Contador('Carolina');
  console.log(Contador.getCuentaGlobal()); // prints 0
  

*/





/* 
//
class TicketManager{
    #precioBaseDeGanancia = 0.15;

    constructor(){
        this.eventos=[];
    }
getEventos(){
    console.log(this.eventos);
}

agregarEvento(nombre,lugar,precio,capacidad,fecha){
const evento_nuevo = {
    id: TicketManager.ultimo_id
    nombre: nombre,
    lugar: lugar,
    precio: precio*this.#precioBaseDeGanancia;
    capacidad: capacidad || 50;
    fecha: fecha,
    participantes: []
}
this.eventos.push(evento_nuevo);
}
}
*/







// class Contador{
//     static contGlobal = 0;
//     static getCuentaGlobal(){
//         console.log(`El contador global está en: ${Contador.contGlobal}`)
// }
//     constructor(responsable){
//         this.responsable = responsable;
//         this.contInd = 0;
//     }

//     getResponsable(){
//         console.log(this.responsable)
//     }

//     contar(){
//         this.contInd++;
//         Contador.contGlobal++;        
//         console.log(`El contador individual de ${this.responsable} esta en: ${this.contInd}. Y el global en: ${Contador.contGlobal}`)
//     }

//     getCuentaIndividual(){
//         console.log(`El contador de ${this.responsable} está en: ${this.contInd}`)
//     }




// }


// let Pablo = new Contador("Pablo");
// let Jorge = new Contador("Jorge");

// Pablo.getResponsable();
// Jorge.getResponsable();

// Pablo.contar();
// Pablo.contar();
// Jorge.contar();
// Jorge.contar();
// Jorge.contar();

// Jorge.getCuentaIndividual();
// Pablo.getCuentaIndividual();
// Contador.getCuentaGlobal();

// console.log(Object.values(Contador))










// const objetos = [{
//     manzanas:3,
//     peras:2,
//     carne:1,
//     jugos:5,
//     dulces:2
// },
// {
//     manzanas:1,
//     sandias:1,
//     huevos:6,
//     jugos:1,
//     panes:4
// }]


//  let tipos = [];

//  objetos.forEach((pedido) =>{
//     tipos.push(...Object.keys(pedido))
//  })

// let cantVendidas = [];

// objetos.forEach((pedido) =>{
//     cantVendidas.push(...Object.values(pedido))
// })

// let totalVendidos = cantVendidas.reduce((acc,num)=>{
//     return acc+num
// },0)

// console.log(tipos);
// console.log(cantVendidas);
// console.log(totalVendidos)







// class TicketManager {
//   static ultimo_id = 0;
//   #precioBaseDeGanancia = 1.15;


//   constructor() {
//     this.eventos = [];
//   }

//   getEventos() {
//     console.log(this.eventos)
//   }

//   agregarEvento(nombre, lugar, precio, capacidad, fecha) {
//     TicketManager.ultimo_id = TicketManager.ultimo_id + 1;
//     const evento_nuevo = {
//       id: TicketManager.ultimo_id,
//       nombre: nombre,
//       lugar: lugar,
//       precio: precio * this.#precioBaseDeGanancia,
//       capacidad: capacidad || 50,
//       fecha: fecha,
//       participantes: []

//     }
//     this.eventos.push(evento_nuevo);
//   }
// }

// const manager = new TicketManager();
// manager.getEventos();
// manager.agregarEvento('Evento01','Bsas',1000,100,'21mar2023')
// manager.getEventos();












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