const productos = [
    {id:'1', nombre: 'Buzo sabor blanco', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/buzo_sabor_blanco_ua7uif.jpg', precio: 5000, descripcion:'Buzo canguro oversize blanco', stock:'10', categoria:'buzos'},
    {id:'2', nombre: 'Buzo sabor negro', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/buzo_sabor_negro_onseaf.jpg', precio:5000, descripcion:'Buzo canguro oversize negro', stock:'15',categoria:'buzos'},
    {id:'3', nombre: 'Buzo skate negro/naranja', img:'https://res.cloudinary.com/chet/image/upload/v1641392817/sabor%20productos/buzo_skate_naranja_pcodf9.jpg', precio:5000, descripcion:'Buzo canguro oversize negro/naranja', stock:'20' ,categoria:'buzos'},
    {id:'4', nombre: 'Buzo soy magia negro', img:'https://res.cloudinary.com/chet/image/upload/v1641392817/sabor%20productos/buzo_soy_magia_negro_k6xrzh.jpg', precio:5000, descripcion:'Buzo canguro oversize negro soy magia', stock:'7',categoria:'buzos'},
    {id:'5', nombre: 'Buzo anorak negro', img:'https://res.cloudinary.com/chet/image/upload/v1641392817/sabor%20productos/buzoanoraknegro_uuco2x.jpg', precio:6000, descripcion:'Anorak negro con capucha', stock:'10',categoria:'buzos'},
    {id:'6', nombre: 'Chomba negra sabor', img:'https://res.cloudinary.com/chet/image/upload/v1641392817/sabor%20productos/chomba_negra_fbascf.jpg', precio: 4000, descripcion:'Chomba negra pique ', stock:'5',categoria:'remeras'},
    {id:'7', nombre: 'Remera animals blanca', img:'https://res.cloudinary.com/chet/image/upload/v1641392819/sabor%20productos/remera_animals_blanca_pk9quf.jpg', precio:3000, descripcion:'Remera oversize blanca', stock:'30',categoria:'remeras'},
    {id:'8', nombre: 'Remera eternal joy blanca', img:'https://res.cloudinary.com/chet/image/upload/v1641392819/sabor%20productos/remera_eternal_joy_blanca_yai8z3.jpg', precio:3000, descripcion:'Remera oversize blanca', stock:'10',categoria:'remeras'},
    {id:'9', nombre: 'Remera grateful negra', img:'https://res.cloudinary.com/chet/image/upload/v1641392819/sabor%20productos/remera_grateful_negra_ojiy8l.jpg', precio:3000, descripcion:'Remera oversize negra', stock:'15',categoria:'remeras'},
    {id:'10', nombre: 'Remera grateful blanca', img:'https://res.cloudinary.com/chet/image/upload/v1641392819/sabor%20productos/remera_grateful_blanca_aj378g.jpg', precio:3000, descripcion:'Remera oversize blanca', stock:'20',categoria:'remeras'},
    {id:'11', nombre: 'Remera negra sabor', img:'https://res.cloudinary.com/chet/image/upload/v1641392819/sabor%20productos/remera_negra_s.._zb9lmx.jpg', precio:2500, descripcion:'Remera oversize negra sabor', stock:'7',categoria:'remeras'},
    {id:'12', nombre: 'Pantalon jogger arena', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/pantalon_jogger_arena_z5lvjw.jpg', precio:4000, descripcion:'jogger color arena sabor', stock:'10',categoria:'pantalones'},
    {id:'13', nombre: 'Pantalon jogger negro', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/pantalon_jogger_negro_tgv90m.jpg', precio:4000, descripcion:'Jogger color negro sabor ', stock:'5',categoria:'pantalones'},
    {id:'14', nombre: 'Pantalon work arena', img:'https://res.cloudinary.com/chet/image/upload/v1641392819/sabor%20productos/pantalon_work_recto_arena_rhcdc1.jpg', precio:5000, descripcion:'Pantalon chino recto color arena', stock:'30',categoria:'pantalones'},
    {id:'15', nombre: 'Pantalon work azul', img:'https://res.cloudinary.com/chet/image/upload/v1641392819/sabor%20productos/pantalon_work_recto_azul_w6rgmk.jpg', precio:5000, descripcion:'Pantalon chino recto color azul', stock:'10',categoria:'pantalones'},
    {id:'16', nombre: 'Pantalon work negro', img:'https://res.cloudinary.com/chet/image/upload/v1641392819/sabor%20productos/pantalon_work_recto_negro_utaznp.jpg', precio:5000, descripcion:'Pantalon chino recto color negro', stock:'15',categoria:'pantalones'},
    {id:'17', nombre: 'Medias sabor amarillas', img:'https://res.cloudinary.com/chet/image/upload/v1641392817/sabor%20productos/medias_amarillas_aecay3.jpg', precio:900, descripcion:'Medias tiro alto sabor amarillas', stock:'20',categoria:'medias'},
    {id:'18', nombre: 'Medias sabor celestes', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/medias_celestes_p4z6cx.jpg', precio:900, descripcion:'Medias tiro alto sabor celestes', stock:'7',categoria:'medias'},
    {id:'19', nombre: 'Medias grateful', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/medias_grateful_blancas_qqurj8.jpg', precio:900, descripcion:'Medias grateful blancas', stock:'10',categoria:'medias'},
    {id:'20', nombre: 'Medias sabor naranjas', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/medias_naranjas_e51p5q.jpg', precio:900, descripcion:'Medias sabor naranjas ', stock:'5',categoria:'medias'},
    {id:'21', nombre: 'Medias lila', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/mediaslila_ftwi4n.jpg', precio:900, descripcion:'Medias altas color lila', stock:'30',categoria:'medias'},
    {id:'22', nombre: 'Medias sabor negras', img:'https://res.cloudinary.com/chet/image/upload/v1641396262/sabor%20productos/mediasnegras_uleyxg.jpg', precio:900, descripcion:'Medias sabor color negro', stock:'10',categoria:'medias'},
    {id:'23', nombre: 'Zapatillas b1', img:'https://res.cloudinary.com/chet/image/upload/v1641392820/sabor%20productos/zapatilas_b1_arena_wsj8zy.jpg', precio:6000, descripcion:'Zapatillas b1 color arena', stock:'15',categoria:'zapatillas'},
    {id:'24', nombre: 'Zapatillas b1', img:'https://res.cloudinary.com/chet/image/upload/v1641396195/sabor%20productos/bdrpzajwaoskpp5stcwd.jpg', precio:6000, descripcion:'Zapatillas b1 color negro', stock:'20',categoria:'zapatillas'},
    {id:'25', nombre: 'Zapatillas curv', img:'https://res.cloudinary.com/chet/image/upload/v1641392817/sabor%20productos/zapatillas_curv_blanco_s1n5hc.jpg', precio:6000, descripcion:'Zapatillas curv color blanco', stock:'7',categoria:'zapatillas'},
    {id:'26', nombre: 'zapatillas curv', img:'https://res.cloudinary.com/chet/image/upload/v1641392817/sabor%20productos/zapatillas_curv_negro_kesnjf.jpg', precio:6000, descripcion:'Zapatillas curv color negro', stock:'10',categoria:'zapatillas'},
    {id:'27', nombre: 'Zapatillas curv', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/zapatillas_curv_verde_klcc4e.jpg', precio:6000, descripcion:'Zapatillas curv color verde ', stock:'5',categoria:'zapatillas'},
    {id:'28', nombre: 'Zapatillas s1', img:'https://res.cloudinary.com/chet/image/upload/v1641392818/sabor%20productos/zapatillas_s1_negro_sg9sk2.jpg', precio:7000, descripcion:'Zapatillas s1 color negro', stock:'30',categoria:'zapatillas'},
    {id:'29', nombre: 'shoulder bag', img:'https://res.cloudinary.com/chet/image/upload/v1641392820/sabor%20productos/shoulder_bag_arena_mtojf5.jpg', precio:3500, descripcion:'Shoulder bag sabor color arena', stock:'30',categoria:'bags'},
    {id:'30', nombre: 'shoulder bag', img:'https://res.cloudinary.com/chet/image/upload/v1641392820/sabor%20productos/shoulder_bag_negro_jjvth8.jpg', precio:3500, descripcion:'Shoulder bag sabor color negro', stock:'30',categoria:'bags'},
    {id:'31', nombre: 'Rinonera', img:'https://res.cloudinary.com/chet/image/upload/v1641392820/sabor%20productos/ri%C3%B1onera_azul_c87zpn.jpg', precio:3000, descripcion:'rinonera sabor azul', stock:'30',categoria:'bags'},
    {id:'32', nombre: 'Skate sabor W', img:'https://res.cloudinary.com/chet/image/upload/v1641392820/sabor%20productos/skate_arena_klq1vi.jpg', precio:7000, descripcion:'Skate completo sabor watamboo', stock:'30',categoria:'skate'},
    {id:'33', nombre: 'Skate sabor maple', img:'https://res.cloudinary.com/chet/image/upload/v1641392820/sabor%20productos/skate_sabor_rojo_efzyj5.jpg', precio:9000, descripcion:'Skate completo sabor maple', stock:'30',categoria:'skate'},
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