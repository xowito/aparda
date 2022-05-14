import { search } from '../repository/user.ts'
import * as does_user_exists from '../libs/does_user_exists.ts'

export async function get_user({response, params}: any) {


    const user_exists = await does_user_exists.find_by_id(params.id)

    if (user_exists) {
        const result = await search(params);
        response.status = 200;
        response.body = result.rows;
    } else {
        response.status = 404;
        response.body = {message: 'Usuario no encontrado'}
    }
}


