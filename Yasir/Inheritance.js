class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getInfo() {
        return { name: this.name, email: this.email };
    }

    login() {
        return "You are logged in";
    }
}
class SubAdmin extends User {
    constructor(name, email) {
        super(name, email)
    }
    getAdminInfo() {
        return "I am Subadmin"
    }
}

const tom = new SubAdmin("Yasir", "yasir.m@tcs.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());