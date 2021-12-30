const productos = [
    {id:'1', nombre: 'Buzo', img:'imagen', precio:'$5000', descripcion:'Buzo canguro oversize', stock:'10'},
    {id:'2', nombre: 'Remera redhot', img:'imagen', precio:'$3000', descripcion:'Remera red hot oversize', stock:'15'},
    {id:'3', nombre: 'Remera sabor', img:'imagen', precio:'$2000', descripcion:'Remera sabor roja', stock:'20'},
    {id:'4', nombre: 'pantalon chino', img:'imagen', precio:'$5000', descripcion:'Pantalon chino recto', stock:'7'},
    {id:'5', nombre: 'zapatillas negras', img:'imagen', precio:'$6000', descripcion:'Zapatillas negras sabor', stock:'10'},
    {id:'6', nombre: 'Tabla sabor', img:'imagen', precio:'$4000', descripcion:'Tabla sabor 7.5 maple ', stock:'5'},
    {id:'7', nombre: 'Medias doble tira', img:'imagen', precio:'$900', descripcion:'Medias altas doble banda', stock:'30'},
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