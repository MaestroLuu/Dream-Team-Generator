class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName (name) {}

    getId(id) {}

    getEmail(email) {}

    getRole(this) {
        return('Manager');
    }
}