export class Utilisateur {
    userId : number;
    usercode : String ;
    firstname : String ;
    lastname : String ;
    password : String ;
    emailUser : String ;
    phone: String ;
    adressUser : String ;
    age : number ;
    
    constructor() {
        this.userId = 0;
        this.usercode = '';
        this.firstname = '';
        this.lastname = '';
        this.password = '';
        this.emailUser = '';
        this.phone = '';
        this.adressUser = '';
        this.age = 0;
    }
}

