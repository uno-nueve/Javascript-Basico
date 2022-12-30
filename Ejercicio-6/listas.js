const listaCompra = ['huevos', 'leche', 'manteca', 'azúcar', 'chocolate', 'crema batida'];
listaCompra.push('aceite de girasol');
listaCompra.splice(6, 1);

const films = [
    { titulo: 'Blade Runner', director: 'Ridley Scott', fecha: 1982 },
    { titulo: 'The Nice Guys', director: 'Shane Black', fecha: 2016 },
    { titulo: "Singin' in the rain", director: 'Gene Kelly & Stanley Donen', fecha: 1952 }
]

const filtro = films.filter(film => film.fecha > 2010)

const directores = films.map(({director}) => `${director}`)

const titulos = films.map(({titulo}) => `${titulo}`)

const concat = directores.concat(titulos) 
const propag = [...directores, ...titulos]