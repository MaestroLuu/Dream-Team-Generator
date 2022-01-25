const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    getRole(this) {
        return('Manager');
    }
}