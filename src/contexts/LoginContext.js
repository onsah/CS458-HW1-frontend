import React from 'react';

class LoginContext {
    constructor() {
        this.token = undefined;
    }

    isLoggedIn = () => {
        return this.token !== undefined;
    }

    login = (token) => {
        this.token = token;
    }

    logout = () => {
        this.token = undefined;
    }
}

export const loginContext = new LoginContext();