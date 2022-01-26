class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(name) {
        return this.name;
    };

    getId(id) {
        return this.id;
    };

    getEmail(email) {
        return this.email;
    };

    getRole() {
        // let role;
        // switch (testValue) {
        //   case "Employee":
        //     role =
        //       "Employee";
        //     break;
        //   case "Manager":
        //     role =
        //       "Manager";
        //     break;
        //   case "Engineer":
        //     role =
        //       "Engineer";
        //     break;
        //   case "Intern":
        //     role =
        //       "Intern";
        //     break;
        // }
    
        return "Employee";
    };
}

module.exports = Employee;