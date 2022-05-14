import { update } from '../repository/user.ts'
import * as does_user_exists from '../libs/does_user_exists.ts'

export async function update_user({request, params , response}: any) {
    const user_exists = await does_user_exists.find_by_id(params.id);

    if (user_exists) {

        const body = request.body();
        const user: any = await body.value;

        response.status =200;
        response.body = await update(user.name, user.country, params.id)
        
    } else {
        response.status = 404;
        response.body = {message: 'User not found'}
    }
    
}


