import { filter } from 'lodash'
import { Filters, User } from './types'

export const filterUsers = (users: User[], filters: Filters) => {
    return filter(
        users,
        (user) =>
            user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            user.email.toLowerCase().includes(filters.email.toLowerCase())
    )
}
