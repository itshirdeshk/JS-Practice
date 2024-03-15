class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}hirdesh`;
    }

    set password(value){
        this._password = value;
    }
}

const hirdesh = new User("h@gmail.com", "123");
