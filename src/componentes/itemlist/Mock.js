const productos = [
    {id:'1', nombre: 'Buzo sabor blanco', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/buzo_sabor_blanco_ua7uif.jpg', precio:'$5000', descripcion:'Buzo canguro oversize blanco', stock:'10'},
    {id:'2', nombre: 'Buzo sabor negro', img:'imagen', precio:'$5000', descripcion:'Buzo canguro oversize negro', stock:'15'},
    {id:'3', nombre: 'Buzo skate negro/naranja', img:'imagen', precio:'$5000', descripcion:'Buzo canguro oversize negro con detalles naranja', stock:'20'},
    {id:'4', nombre: 'Buzo soy magia negro', img:'imagen', precio:'$5000', descripcion:'Buzo canguro oversize negro soy magia', stock:'7'},
    {id:'5', nombre: 'Buzo anorak negro', img:'imagenesProductos/buzoanoraknegro.jpg', precio:'$6000', descripcion:'Anorak negro con capucha', stock:'10'},
    {id:'6', nombre: 'Chomba negra sabor', img:'imagen', precio:'$4000', descripcion:'Chomba negra pique ', stock:'5'},
    {id:'7', nombre: 'Remera animals blanca', img:'', precio:'$3000', descripcion:'Remera oversize blanca', stock:'30'},
    {id:'8', nombre: 'Remera eternal joy blanca', img:'imagen', precio:'$3000', descripcion:'Remera oversize blanca', stock:'10'},
    {id:'9', nombre: 'Remera grateful negra', img:'imagen', precio:'$3000', descripcion:'Remera oversize negra', stock:'15'},
    {id:'10', nombre: 'Remera grateful blanca', img:'imagen', precio:'$3000', descripcion:'Remera oversize blanca', stock:'20'},
    {id:'11', nombre: 'Remera negra sabor', img:'imagen', precio:'$2500', descripcion:'Remera oversize negra sabor', stock:'7'},
    {id:'12', nombre: 'Pantalon jogger arena', img:'imagen', precio:'$4000', descripcion:'jogger color arena sabor', stock:'10'},
    {id:'13', nombre: 'Pantalon jogger negro', img:'imagen', precio:'$4000', descripcion:'Jogger color negro sabor ', stock:'5'},
    {id:'14', nombre: 'Pantalon work arena', img:'/mediaslilas.jpg', precio:'$5000', descripcion:'Pantalon chino recto color arena', stock:'30'},
    {id:'15', nombre: 'Pantalon work azul', img:'imagen', precio:'$5000', descripcion:'Pantalon chino recto color azul', stock:'10'},
    {id:'16', nombre: 'Pantalon work negro', img:'imagen', precio:'$5000', descripcion:'Pantalon chino recto color negro', stock:'15'},
    {id:'17', nombre: 'Medias sabor amarillas', img:'imagen', precio:'$900', descripcion:'Medias tiro alto sabor amarillas', stock:'20'},
    {id:'18', nombre: 'Medias sabor celestes', img:'imagen', precio:'$900', descripcion:'Medias tiro alto sabor celestes', stock:'7'},
    {id:'19', nombre: 'Medias grateful', img:'imagen', precio:'$900', descripcion:'Medias grateful blancas', stock:'10'},
    {id:'20', nombre: 'Medias sabor naranjas', img:'imagen', precio:'$900', descripcion:'Medias sabor naranjas ', stock:'5'},
    {id:'21', nombre: 'Medias lila', img:'/mediaslilas.jpg', precio:'$900', descripcion:'Medias altas color lila', stock:'30'},
    {id:'22', nombre: 'Medias sabor negras', img:'imagen', precio:'$900', descripcion:'Medias sabor color negro', stock:'10'},
    {id:'23', nombre: 'Zapatillas b1', img:'imagen', precio:'$6000', descripcion:'Zapatillas b1 color arena', stock:'15'},
    {id:'24', nombre: 'Zapatillas b1', img:'imagen', precio:'$6000', descripcion:'Zapatillas b1 color negro', stock:'20'},
    {id:'25', nombre: 'Zapatillas curv', img:'imagen', precio:'$6000', descripcion:'Zapatillas curv color blanco', stock:'7'},
    {id:'26', nombre: 'zapatillas curv', img:'imagen', precio:'$6000', descripcion:'Zapatillas curv color negro', stock:'10'},
    {id:'27', nombre: 'Zapatillas curv', img:'imagen', precio:'$6000', descripcion:'Zapatillas curv color verde ', stock:'5'},
    {id:'28', nombre: 'Zapatillas s1', img:'./imagenesProductos/mediaslilas.jpg', precio:'$7000', descripcion:'Zapatillas s1 color negro', stock:'30'},
    {id:'29', nombre: 'shoulder bag', img:'/mediaslilas.jpg', precio:'$3500', descripcion:'Shoulder bag sabor color arena', stock:'30'},
    {id:'30', nombre: 'shoulder bag', img:'/mediaslilas.jpg', precio:'$3500', descripcion:'Shoulder bag sabor color negro', stock:'30'},
    {id:'31', nombre: 'Rinonera', img:'/mediaslilas.jpg', precio:'$3000', descripcion:'rinonera sabor azul', stock:'30'},
    {id:'32', nombre: 'Skate sabor W', img:'/mediaslilas.jpg', precio:'$7000', descripcion:'Skate completo sabor watamboo', stock:'30'},
    {id:'33', nombre: 'Skate sabor maple', img:'/mediaslilas.jpg', precio:'$9000', descripcion:'Skate completo sabor maple', stock:'30'},
]
export const getFetch = new Promise((resolve, reject)=>{
if(true){
    setTimeout(()=>{
        resolve(productos)
    }, 3000)
}else{
    reject('error')
}
})