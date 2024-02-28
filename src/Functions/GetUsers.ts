import {IUser} from "../Shared/Interfaces";

const BASE_URL = 'https://655ca67025b76d9884fdb3e2.mockapi.io/api/Users'

/**@description
 * @param page {number} Количество страницы
 * @param limit {number} Количество строк
 * */
export const getUsers = async (page: number, limit = 10): Promise<IUser[]> => {
  try {
    const response = await fetch( `${BASE_URL}?page=${page}&limit=${limit}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}