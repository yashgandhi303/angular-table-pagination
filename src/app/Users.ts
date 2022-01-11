export class Users
{
    id:string;
    firstname:string;
    lastname:string;
    email:string;
    mobile:string;
    salary:string;


    constructor(id,firstname, lastname, email, mobile, salary)
    {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobile = mobile;
        this.salary = salary;
    }


}