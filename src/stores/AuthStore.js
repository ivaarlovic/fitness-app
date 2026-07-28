import { makeObservable, action, observable } from "mobx";

class AuthStore {
    user = JSON.parse(localStorage.getItem("loginUser")) || [];

    constructor() {
        makeObservable(this, {
            user: observable,
            login: action,
            register: action
        })
    }

    login(email,password) {
        const users = JSON.parse(localStorage.getItem("users"));

        const user = users.find((u) => u.email === email && u.password === password);

        if(!user) {
            return false;
        }

        this.user = user;
        localStorage.setItem("loginUser", JSON.stringify(user));

        return true;
    }

    register(email,password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find((u) => u.email === email);

        if(existingUser) {
            alert("Već ste registrirani.");
            return;
        }

        const newUser = {
            id: Date.now(),
            email: email,
            password: password,
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        return true;
    }

    logout() {
        this.user = null;
        localStorage.removeItem("loginUser");
    }
}

export default AuthStore;