function first() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.debug("first() decorator called");
    }
}


function second() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.debug("second() decorator called");
    }
}

class ExampleClass {
    @first()
    @second()
    method() {}
}