const someExternalDependency = (name) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Hello ${name}!`);
    }, 500)
});

const main = async () => {
    const result = await someExternalDependency('Yape');
    console.debug(result);
};

main();
    // .then(console.debug)
    // .catch(e => console.error('Error!!!!', e))
    // .finally(() => console.debug('bye bye'));

someExternalDependency('Yape First!')
    .then((result) => console.debug(result));   