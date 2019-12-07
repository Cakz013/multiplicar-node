const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

let listarArchivo = (base,limite) =>{
    for(let i=1;i<=limite; i++){
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}


let crearArchivo = (base) =>{
    return new Promise ((resolve,reject)=>
    {
        if (!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return
        }
         base = base;
        let data = '';

        for(let i=1;i<=10;i++){
            data += `${ base } * ${ i } = ${base * i}\n`;
            
        }
        fs.writeFile(`multiplicar/tabla-${ base }.txt`, data, (err) => {
            if (err) reject (err)
            else
            resolve(`El archivo tabla-${base}.txt ha sido creado!`);
          });
    })
}






  module.exports = {
      crearArchivo,
      listarArchivo
  }