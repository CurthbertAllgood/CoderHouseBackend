class Usuario{

    constructor(nombre, apellido, libro, mascota){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros= libro;
        this.mascotas=mascota;

    }
    


    getFullName(){
        return `Nombre Completo: ${q.nombre} ${q.apellido}`;
    }

    addMascota(){
        let mascota= prompt("Ingrese la mascota nueva: ");
        this.mascotas.push(mascota)
    }
    countMascota(){
        console.log(`Las Mascotas de ${q.nombre} ${q.apellido} son:`)
        q.mascotas.forEach(mascota => {
            console.log(mascota);
        });
        return console.log(`cantidad de mascogtas: ${q.mascotas.length}`);
    }

    getBookNames(){
        let nombreLibros=[ ];
            q.libros.map((libro)=>{
                nombreLibros.push(libro.titulo);
            }
            )
            return nombreLibros;
    }

}
let q = new Usuario("Carlos", "Ortiz", [{titulo:"Cancion", autor:"conan doyle"},{titulo:"muerte" , autor:"edgar alan poe"}], ["jacinto", "juan carlos", "leon", "fulano"]);

console.log(q.getFullName());
console.log(q.getBookNames());
q.addMascota();
q.countMascota();