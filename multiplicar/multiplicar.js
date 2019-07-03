// requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = "";

        if (!Number(base)) {
            reject(`El valor introducido "${ base }" no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido como limite "${ limite }" no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }.txt`)
        });
    });
}

let listarArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";
        if (!Number(base)) {
            reject(`El valor introducido como base "${ base }" no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido como limite "${ limite }" no es un número`);
            return;
        }

        console.log('============================='.green);
        console.log(`========= TABLA DE ${ base }=========`.green);
        console.log('============================='.green);

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }
        resolve(data);
    });
}


module.exports = {
    crearArchivo,
    listarArchivo
}