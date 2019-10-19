function solve(object) {

    function errorMessage(header) {
        return `Invalid request header: Invalid ${header}`;
    }

    let allowedMethods = [
        'GET',
        'POST',
        'DELETE',
        'CONNECT',
    ];
    if (!allowedMethods.includes(object.method)) {
        throw new Error(errorMessage('Method'));
    }

    const urlPattern = /^[a-z0-9.]+$|^\*$/g;
    if (object.uri === undefined || object.uri === '' || object.uri.match(urlPattern) === null) {
        throw new Error(errorMessage('URI'));
    }

    let allowedVersions = [
        'HTTP/0.9',
        'HTTP/1.0',
        'HTTP/1.1',
        'HTTP/2.0',
    ];
    if (!allowedVersions.includes(object.version)) {
        throw new Error(errorMessage('Version'));
    }

    const messagePattern = /^[^<>\\&'"]+$/g;
    if (object.message === undefined || object.message.match(messagePattern) === null) {
        if (object.message !== ''){
            throw new Error(errorMessage('Message'));
        }
    }

    return object;
}

console.log(solve({
        method: 'GET',
        uri: '*',
        version: 'HTTP/1.1',
        message: ''
    }
));