import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config) => {
    const {email, password} = JSON.parse(config.data);
    console.log(email, password)
    
    if(email !== 'jo@gmail.com' || password !== 'admin')
        return [400, {message: 'errado'}]

    const user = {
        id: 1, 
        name: 'João',
        username: 'joazito',
        email:'jo@gmail.com',
        avatar:'/images/avatars/avatar_1.jpeg'
    }
    return[200, {user}]
});

