import client from '../db.ts'

export async function find_by_id(id: number | string): Promise<boolean> {
   const result = await client.query('SELECT COUNT(*) count FROM user Where id = ?', [id])
   return result[0].count >=1;
}