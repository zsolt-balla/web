
class Car {
    constructor(model, age) {
        this.model = model
        this.age = age
        this.fuel = 10
        this.passengers = []
    }

    drive () {
        this.fuel -= 1
    }

    get_in (name) {
        this.passengers.push(name)
    }
}


