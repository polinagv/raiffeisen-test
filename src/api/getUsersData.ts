import axios from 'axios'

import { type User } from '../common/types'

export const getUsersData = () => {
    return axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
}
