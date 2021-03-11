//si no se espicifica lo contrario en webpack.conf este será el entry point para webpack (./src/index.js)
//forma de manejar dependencias manualmente: para usar módulos en js al linkear el js en el html añadir en la definición del script 'type="module"' y en ese archivo hacer un import ... from de lo que se necesite y el export en dicha dependencia
//con webpack esto "se simplifica"
// lo primero añadir en el package.json(se genera haciendo un 'npm init' en terminal) la línea 'build": "webpack --mode production",' en los scripts
//añadir en mismo sitio línea '"dev": "webpack --mode development",' de esta manera generamos 2 paquetes **
//production será el que se entrega al navegador(usuario final, en la carpeta dist)
//si hacemos en terminal npm run build nos generará el paquete para production y si hacemos npm run dev construirá el de desarrollo, que no está tan optimizado como production pero es más fácil debugear
//** si añadimos --watch tras el --mode develpoment se quedará vigilando los cambios de forma automática (bloqueando la terminal)
//por defecto webpack solo entiende js
//para usar otras dependencias que no sean js (como css, imagenes, react) necesitamos usar loaders
//babel es una herramienta que traduce js6 en js5 (todos los navegadores son compatibles con js5 pero no con js6)
