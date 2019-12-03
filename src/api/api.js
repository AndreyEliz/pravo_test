import 'whatwg-fetch'; // fetch polifill

export const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
export const APPID = 'a42548e63faac56fcfc88d5032c4f1ec';

export class AuthError extends Error {
    constructor(...props) {
        super(...props);
        this.name = 'AuthError';
    }
}

export class BadRequestError extends Error {
    constructor(...props) {
        super(...props);
        this.name = 'BadRequestError';
    }
}

export class NotFoundError extends Error {
    constructor(...props) {
        super(...props);
        this.name = 'NotFoundError';
    }
}

const throwNetworkError = (remoteError, response) => {
    const message = remoteError ? remoteError.message : 'Error occured';
    if (response.status === 401) throw new AuthError(message);
    if (response.status === 404) throw new NotFoundError(message);
    if (response.status === 400) throw new BadRequestError(message);
    else throw new Error(message);
};

const handleErrors = (response) => {
    return response.ok ?
        Promise.resolve(response)
        :
        response.json().finally((e) => throwNetworkError(e, response))
};

const handleResponse = (response) => {
    return response.text().then((text) => {
        try {
            return JSON.parse(text);
        } catch (e) {
            return text ? text: {};
        }
    });
};

const fetchData = (url, options) => fetch(url, {...options})
    .then(handleErrors)
    .then(handleResponse)
    .catch((e) => {
        throw e;
    });

const generateFormData = (obj) => {
    let formData = '';
    for (let key in obj ) {
        if (obj[key] || obj[key] === 0 || obj[key] === '') {
            // eslint-disable-next-line
            if (formData != '') {
                formData += '&';
            }
            if (obj[key] === '') formData += key;
            else formData += key + '=' + encodeURIComponent(obj[key]);
        }
    }
    return formData;
};

const get = (url='', data={}, options={}) => {
    const requestData = generateFormData(data);
    const requestUrl = requestData ? `${url}?${requestData}` : url;
    const getData = () => fetchData(requestUrl, {
            method: 'GET',
            ...options
    });

    return getData();
};

const post = (url, data) => {
    const formData  = new FormData();
  
    for(const name in data) {
      formData.append(name, data[name]);
    }
  
    return fetchData(url, {
      method: 'POST',
      body: formData
    });
  }

export { 
    get,
    post,
};
