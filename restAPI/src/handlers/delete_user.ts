import { remove } from '../repository/user.ts';
import * as does_user_exists from '../libs/does_user_exists.ts';


export async function delete_user({params, response}: any) {
    const user_exists = await does_user_exists.find_by_id(params.id);

    if (user_exists) {
        response.status = 200;
        response.body = await remove(params.id);
        
    } else {
        response.status = 404;
        response.body = {message: 'User not found'}
    }

}


