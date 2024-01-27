//Declarar la variable que tendrá la url de la API a la que se hará la solicitud

let url= "http://jsonplaveholder.typicode.com/users";

//Inicializar la función fetch para realizar la petición GET a la URL API
fetch(url)
//Inicializando una promesa que me permitirá operar y mostrar el resultado de la consulta que estamos solicitando
.then(resonse=> Response.json())
//Inicializamos una promesa que representará los datos obtenidos dentro de la tabla de html
.then(data=>mostrarData(data))
//Capturar los errores para que se visualicen en la consola por si surgen
.catch(error => console.log(error))

//Declarar la función mostrarData que recibe los datos y los muestra en la consola y en el cuerpo de la tabla de HTML
const mostrarData = (data) => {
    //Imprimir los datos en la consola
    console.log(data);
    //Inicializar una variable que almacenará el contenido HTML de la tabla
    let body ="";
    //Inicializar un bucle que itera sobre los elementos en "data" y construirá las filas de la tabla con los datos obtenidos
    for (let i = 0; i < data.lenght; i++){
        
    }
}