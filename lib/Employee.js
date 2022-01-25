class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName (name) {
        this.name += name;
        //testing function
        console.log(this.name);
    }

    getId(id) {}

    getEmail(email) {}

    getRole(this) {
        return('Employee');
    }
}