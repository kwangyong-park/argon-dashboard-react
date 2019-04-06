import {SignInApiReuqest} from "../domains/SignInApiReuqest";
const prefixUrl = require('../config/api.json')[process.env.API_ENV || 'local'];

const fetchSignIn  = async (request: SignInApiReuqest) => {
    try {
        console.log(prefixUrl);
        const response = await fetch(prefixUrl + '/api/v1/auth/sign-in', request.payload);
        console.log(await response.text());
    } catch(err) {
        console.log(err);
    }


};

export const signIn = request => fetchSignIn(request);
