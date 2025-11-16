export default [
    {
        name: 'UC-1 Empty credentials',
        username: '',
        password: '',
        clearUsername: true,
        clearPassword: true,
        expectedError: 'Epic sadface: Username is required'
    },
    {
        name: 'UC-2 Empty password',
        username: 'standard_user',
        password: '',
        clearUsername: false,
        clearPassword: true,
        expectedError: 'Epic sadface: Password is required'
    },
    {
        name: 'UC-3 Valid credentials',
        username: 'standard_user',
        password: 'secret_sauce',
        clearUsername: false,
        clearPassword: false,
        expectedHeader: 'Swag Labs',
        expectedError: ''
    }
];