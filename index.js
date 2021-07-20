
//-------------------------------------------------------------------
const nombre = "carlos"
const apellido = "Azaustre"

console.log(nombre + " " * apellido);
//Template literals
console.log(`${nombre} ${apellido}`);
//react ejemplo
function Componente({ backgroundColor }) {
    return(<div className={`bg-color-${backgroundColor}`}>Hola</div>)
}
//-------------------------------------------------------------------
const nombre2 = "Cesar";
const edad = 36
const twitter = 'https://twitter.com/cesarnoso';

const persona = {
    nombre: nombre2, 
    edad: edad,
    twitter: twitter, 
}
console.log(persona)
// Shorthand property names
const persona = {
    nombre, 
    edad,
    twitter
}
console.log(persona)
//react ejemplo
function Componente2({initialState, totalCount}) {
    const [state, setState] = userState({initialState, totalCount});
}
//-------------------------------------------------------------------
function nombre3 () {
    return "Hola";
}
//Arrow Functions
const funcionFlecha = () => "Hola"

nombre3();              //Lo imprime*
funcionFlecha();
//react ejemplo
function listaDeTareas () {
    return (
/*        <ul>
           {listado.map(function(elemento) {    |
             return()                           |
                }                               |
       </ul>                                    |
    );                                          V
*/
       <ul>
            {listado.map(elemento => (<li>{elemento.nombre3}</li>))}
       </ul>
            
    );
}
//-------------------------------------------------------------------
const cuadrado = {
    x:10,
    y:10,
}

function calcularArea(cuadrado) {
/*
    return cuadrado.x * cuadrado.y;
            |
            |
            V
*/
    //Destructuring
const{x,y} = cuadrado;
return x * y;
}

calcularArea(cuadrado);

//Ejemplo react
function Avatar({username, url}){
    return<img src={url} alt={username} />
}
//-------------------------------------------------------------------
/*function suma (a,b) {

    if(a === undefined || b === undefined){
        console.log('Debes introducir 2 valores')
    }
    return a + b;           |
                            |
}                           V
Default parameters*/ 
function suma (a=0,b=0) {
return a + b;
}
suma();
//-------------------------------------------------------------------
//(ejemplo con arrays)
const array = [1,2,3,4,5];
const array2 = [6,7,8,9,10];

/*const nuevoArray = array.concat(otroArray);
                                         |
                                         |
                                         |
Spread Operator / Rest Parameters        |  
                                         V     */
const nuevoArray = [...array, ...Array2];

console.log(nuevoArray)

//Ejemplo pero con objetos
const obj1 = {
    a:"a",
    b:"b",
    c:"c",
}
const obj2 = {
    d:"d",
    e:"e"
};
/*const nuevoObjeto = Object.assign({}, obj1, obj2);
                                                |
                                                |
                                                V   
Spread Operator / Rest Parameters                   */
const nuevoObjeto = {...Obj1, ...Obj2};                                             
console.log(nuevoObjeto);

//Ejemplo React
/*function Componente({id, name, username, profile,}) {
 
}                                          | 
                                           |         
                                           V             */  
function Componente({id,...props}) {
    return <nuevoComponente key={id} {...props} /> 
}                                                                                               
//-------------------------------------------------------------------
//Imaginemos ahora que estos son archivos independientes dentro del source:
export default function suma(a,b) { //--suma.js

}

export default function resta(a,b){ //--resta.js

}
import suma from './suma'; //Y acá estaría el "App.js", donde importamos los componentes.
import resta from './resta';

function calculadora () {
    suma();
    resta();
}
// Veamos como funcionaria esto en React:
import React from './React';

React.userState
React.useEffect
React.Fragment
//-------------------------------------------------------------------
const auto = {
    marca:"Tesla",
    model: "CyberTruck",
}
/*let modelo;
if (auto.model) {
    modelo = auto.model;
} else {
    modelo = "ERROR (✖╭╮✖)";
}                                       |
                                        |
                                        |
Ternary operator (Operador ternario)    V
                 Existe?     si           no             */
let modelo = auto.model ? auto.model :"ERROR (✖╭╮✖)"  
modelo;
//Ejemplo react
function ListaTareas({tareas}) {
    return (
        <React.Fragment>
            {tareas.length ? (        //El ".length" es para comporbar si tiene más de un elemento, (pregunta si existe).
                <ul>
                    {/* {tareas.map...}         Si hay tareas se ejecuta esto. */}
                </ul>
            ) : (
                    <div>No hay tareas</div> // Y si no, se ejecuta esto
                )
            )}
        </React.Fragment>
    )
}
//-------------------------------------------------------------------
