import { search } from "../repository/user.ts";


export async function get_all_users (ctx: any) {
    try {
        const result = await search();
        ctx.response.body = result.rows
    } catch (error) {
        console.log(error);
    }
    
}


