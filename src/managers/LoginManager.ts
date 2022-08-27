export default class LoginManager {

    static singleton: LoginManager = new LoginManager();

    private session: LoginSession | null = null;

    constructor() {
        
    }

    doLogin(login: string, senha: string, okCallback: () => void) {
        setTimeout(() => {
            alert("Logado");

            localStorage.setItem("login", login)
            localStorage.setItem("pwd", senha)
            okCallback()
        }, 5000)
    }

}

interface LoginSession  {

    token: String;

}