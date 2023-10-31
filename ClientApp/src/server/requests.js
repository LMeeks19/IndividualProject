const request = async (url, params = {}, method = 'GET') => {
    let options = {
        method
    };

    url += '?' + (new URLSearchParams(params)).toString();

    if (method == 'GET') {
        return await fetch(url, options).then(response => response.json());
    }

    await fetch(url, options);
};

export const GetData = (url, params) => request(url, params, 'GET');
export const PostData = (url, params) => request(url, params, 'POST');
export const PutData = (url, params) => request(url, params, 'PUT');
export const DeleteData = (url, params) => request(url, params, 'DELETE');