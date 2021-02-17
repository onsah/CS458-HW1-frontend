const BASE_ENDPOINT = "https://cs458-backend.herokuapp.com";

export const signupRequest = async (email, password) => {
    const url = BASE_ENDPOINT + "/auth/signup";

    const settings = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    };

    const resp = await fetch(url, settings);
    
    return resp.ok;
};

export const signinRequest = async (email, password) => {
    const url = BASE_ENDPOINT + "/auth/signin";

    const settings = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    };

    const resp = await fetch(url, settings);
    const respData = await resp.json();

    return respData;
};