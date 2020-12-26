// import axios from 'axios';
import axios from 'axios';
import * as actionTypes from '../action-types/auth'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS
    };
}

export const auth = (email, password) => {
    return (
        dispatch => {
            dispatch(authStart());
            const authData = {
                email: email,
                password: password,
            };
            const url = 'http://test.com'
            axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.userId);
                dispatch(authSuccess());
            })
            .catch(err => {
                dispatch(authSuccess()); // handle errors
            });
        }
    )
};