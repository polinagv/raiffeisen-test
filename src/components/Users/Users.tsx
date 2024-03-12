import { Flex, Button } from 'vienna-ui'
import { useState, useEffect } from 'react'

import { getUsersData } from '../../api/getUsersData'
import UsersTable from '../UsersTable/UsersTable'
import { Filters, User } from '../../common/types'
import { initialFiltersValues } from '../../common/constants'
import { filterUsers } from '../../common/utils'
import Filter from '../Filter/Filter'

const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const [filters, setFilters] = useState<Filters>(initialFiltersValues) // filters это { name: '', email: '' } -> { name: 'sfvfvfd', email: 'vff@' }

    // initialFiltersValues = {
    //     name: '',
    //     email: ''
    // }

    // Юзеры будут перезапрашиваться при каждом изменении фильтра
    // можно оптимизировать, добавив debounce или изменив логику на поиск при явном нажатии на кнопку "Найти"

    const fetchUsersData = (filtersAttr: Filters) => {
        getUsersData().then(({ data }) => {
            const filteredData = filterUsers(data, filtersAttr)
            setUsers(filteredData)
        })
    }

    useEffect(() => {
        fetchUsersData(filters)
    }, [])

    return (
        <Flex direction="column">
            <Flex.Item>
                <Flex direction="row" gap="s5">
                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        fieldName="name"
                        label="Искать по имени"
                    />
                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        fieldName="email"
                        label="Искать по email"
                    />
                    <Button
                        design="accent"
                        onClick={() => {
                            fetchUsersData(filters)
                        }}
                    >
                        Найти
                    </Button>

                    <Button
                        design="outline"
                        onClick={() => {
                            setFilters(initialFiltersValues)
                            fetchUsersData(initialFiltersValues)
                        }}
                    >
                        Сбросить
                    </Button>
                </Flex>
            </Flex.Item>
            <Flex.Item>
                <UsersTable users={users} setUsers={setUsers} />
            </Flex.Item>
        </Flex>
    )
}

export default Users
