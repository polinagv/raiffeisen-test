import { Flex } from 'vienna-ui'
import { useState, useEffect } from 'react'

import { getUsersData } from '../../api/getUsersData'
import FilterByName from '../FilterByName/FIlterByName'
import UsersTable from '../UsersTable/UsersTable'
import { Filters, User } from '../../common/types'
import { initialFiltersValues } from '../../common/constants'
import { filterUsers } from '../../common/utils'

const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const [filters, setFilters] = useState<Filters>(initialFiltersValues) // filters это { name: '' } -> { name: 'sfvfvfd' }

    // initialFiltersValues = {
    //     name: '',
    // }

    // Юзеры будут перезапрашиваться при каждом изменении фильтра
    // можно оптимизировать, добавив debounce или изменив логику на поиск при явном нажатии на кнопку "Найти"
    useEffect(() => {
        getUsersData().then(({ data }) => {
            const filteredData = filterUsers(data, filters)
            setUsers(filteredData)
        })
    }, [filters])

    return (
        <Flex direction="column">
            <Flex.Item>
                <FilterByName filters={filters} setFilters={setFilters} />
            </Flex.Item>
            <Flex.Item>
                <UsersTable users={users} setUsers={setUsers} />
            </Flex.Item>
        </Flex>
    )
}

export default Users
