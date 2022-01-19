console.debug(new Date());
const x = new Promise((resolve, reject) => {
    // Simula la espera por una dependencia externa...
    setTimeout(() => {
        resolve('resolved');
    }, 1000)

    reject('Un error no controlado');
});

x.then(v => {
    console.debug(v);
})
.catch(e => {
    console.error(e);
})
.finally(() => {
    console.debug('finally');
});

process.on('exit', () => {
    console.debug(`bye bye @ ${new Date()}`);
})

