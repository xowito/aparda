import { insert } from '../repository/user.ts'

export async function add_user({response, request}: any) {
   
    const body = await request.body();
    const user = await body.value;
    
    if (user.hasOwnProperty('name') && user.hasOwnProperty('country')){
        
        response.status = 200;
        response.body = await insert(user);
    } else {
        response.body = {message: 'Invalid request'};
        response.status = 404;
    }


    response.body = 'adding user';
}