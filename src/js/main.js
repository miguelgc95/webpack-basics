//si no se espicifica lo contrario en webpack.conf este archivo(./src/index.js) será el entry point para webpack
//forma de manejar dependencias manualmente(excluyente con webpack): para usar módulos en js al linkear el js en el html añadir en la definición del script 'type="module"' y en ese archivo hacer un import ... from de lo que se necesite y el export en dicha dependencia
//con webpack esto "se simplifica"

//ejecutar 'npm init' en terminal para generar un package.json

// Añadir en el package.json la línea 'build": "webpack --mode production",' en los scripts
//añadir en mismo sitio línea '"dev": "webpack-dev-server",' de esta manera generamos 2 paquetes o mejor dicho 2 modos
//production será el que se entrega al navegador(usuario final, en la carpeta dist)
//si hacemos en terminal npm run build nos generará el paquete para production y si hacemos npm run dev construirá el de desarrollo, que no está tan optimizado como production pero es más fácil debugear

//por defecto webpack solo entiende js
//para usar otras dependencias que no sean js (como css, imagenes, react) necesitamos usar loaders

//para encontrar un loader y ver como integrarlo al proyecto buscar en la docu oficial (https://webpack.js.org/loaders/) o en github (https://github.com/webpack-contrib/awesome-webpack)
//los loaders se configuran en el webpack.config.js
//los plugins son necesarios para automatizar cosas y que nos faciliten la vida
//uno muy util es 'html-webpack-plugin' (intalarlo con npm dev y añadirlo en webpackconfig)



import { foo, Human } from "./module-a.js"
//import "./styles/sass/main.scss"
import { wey } from "./module-b.js"

console.log(foo());

const paco = new Human;

let useLet = "que dise"

paco.repeat(useLet);

wey();