import React, { useState } from 'react';

function useToken() {
    const getToken = () => {
        return sessionStorage.getItem('token');
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken.token));
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}
export default useToken;
