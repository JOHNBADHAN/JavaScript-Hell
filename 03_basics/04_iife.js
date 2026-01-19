// Immediately Invoked Function Expressions

//Named iifi
(function database (){
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED ${name}`);
})("JOHN")