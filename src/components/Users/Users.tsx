import { Flex, Button } from 'vienna-ui'
import { useState, useEffect } from 'react'

import { getUsersData } from '../../api/getUsersData'
import UsersTable from '../UsersTable/UsersTable'
import type { Filters, Loading, User } from '../../common/types'
import { initialFiltersValues } from '../../common/constants'
import { filterUsers } from '../../common/utils'
import Filter from '../Filter/Filter'

const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const [filters, setFilters] = useState<Filters>(initialFiltersValues)
    const [loading, setLoading] = useState<Loading>('pending')

    const fetchUsersData = (filtersAttr: Filters) => {
        setLoading('pending')
        getUsersData()
            .then(({ data }) => {
                setLoading('resolved')
                const filteredData = filterUsers(data, filtersAttr)
                setUsers(filteredData)
            })
            .catch(() => {
                setLoading('rejected')
            })
    }

    useEffect(() => {
        fetchUsersData(filters)
    }, [])

    return (
        <Flex direction="column">
            <Flex.Item>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetchUsersData(filters)
                    }}
                >
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
                            type="submit"
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
                </form>
            </Flex.Item>

            <Flex.Item>
                <UsersTable
                    users={users}
                    setUsers={setUsers}
                    loading={loading}
                />
            </Flex.Item>
        </Flex>
    )
}

export default Users
