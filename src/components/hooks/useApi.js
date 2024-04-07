import React from "react";
export const BASE_URL = process.env.BASE_URL || 'http://localhost:4000';
console.log('printing', BASE_URL);
const useApi = (url, method, requestBody = {}) => {
    const [response, setResponse] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState();

    const invokeGetCall = async () => {
        try {
            const data = await fetch(`${BASE_URL}/${url}`, {
                headers: {
                    'content-type': 'application/json',
                    // 'authorization': document.cookie()
                }
            });
            const results = await data.json();
            setLoading(false);
            setResponse(results);
        } catch (err) {
            setError(err);
        }
    }

    const invokePostCall = async () => {
        try {
            const data = await fetch(`${BASE_URL}/${url}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // 'authorization': document.cookie()
                },
                body: requestBody
            });
            const results = await data.json();
            setResponse(results);
            setLoading(false);
        } catch (err) {
            setError(err);
        }

    }

    React.useEffect(() => {
        switch (method) {
            case 'GET':
                invokeGetCall();
                break;
            case 'POST':
                invokePostCall();
                break;
            default:
                return;
        }
    }, []);

    return { loading, error, response };

};

export default useApi;