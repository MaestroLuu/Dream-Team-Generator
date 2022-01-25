class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getName (name) {}

    getId(id) {}

    getEmail(email) {}

    getGithub(github) {}

    getRole(this) {
        return('Engineer');
    }
}