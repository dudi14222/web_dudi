let instance = null;

class AuthenticationService{  
    constructor() {
        if(!instance){
            this.isLogedIn = false; 
            this.email = 'dudi1422@gmail.com';
            this.pass =  '123456';
            instance = this;
        }    
        return instance;
    }
    isLogedIn(){
        return this.isLogedIn;
    } 
    authenticateUser(userEmail, userPassword){
        if(this.email === userEmail && this.pass === userPassword){
            this.isLogedIn = true;
            return true;
        }
        return false;
    }     
}
const AuthService = new AuthenticationService();
export default AuthService;