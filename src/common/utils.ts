import { filter } from 'lodash'
import { Filters, User } from './types'

export const filterUsers = (users: User[], filters: Filters) => {
    // users это data, то есть [ { id: 1, name: 'bla', ... }, {}, {}, ... ]
    return filter(
        users,
        (user) =>
            user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            user.email.toLowerCase().includes(filters.email.toLowerCase()) // filters это { name: '' } -> { name: 'sfvfvfd' }
    )
}

// убрать этот комментарий потом:
//     getUsersData().then(({ data }) => {
//         const filteredData = filterUsers(data, filters)
//         setUsers(filteredData)
//     })
