import { Table, Badge, EmptyState, RoundIcon } from 'vienna-ui'
import { CloseCancelX } from 'vienna.icons'
import { Dispatch, SetStateAction } from 'react'
import { orderBy } from 'lodash'

import type { Loading, User } from '../../common/types'

type Props = {
    users: User[]
    setUsers: Dispatch<SetStateAction<User[]>>
    loading: Loading
}

const UserTable = ({ users, setUsers, loading }: Props) => {
    return (
        <Table
            data={users}
            onSort={(_, data) => {
                if (!data?.field) {
                    return
                }
                const { field, direction } = data
                setUsers((users) => orderBy(users, [field], [direction]))
            }}
        >
            <Table.Column id="id" title="#">
                {(user) => user.id}
            </Table.Column>
            <Table.Column id="name" title="Name" sortable>
                {(user) => <Badge color="paris30">{user.name}</Badge>}
            </Table.Column>
            <Table.Column id="username" title="Username" sortable>
                {(user) => user.username}
            </Table.Column>
            <Table.Column id="email" title="Email" sortable>
                {(user) => user.email}
            </Table.Column>
            <Table.Column id="website" title="Website" sortable>
                {(user) => user.website}
            </Table.Column>
            <Table.Column id="phone" title="Phone" sortable>
                {(user) => user.phone}
            </Table.Column>

            {users.length === 0 && loading !== 'pending' && (
                <EmptyState>
                    <RoundIcon color="nice10">
                        <CloseCancelX />
                    </RoundIcon>
                    <EmptyState.Title>Упс...</EmptyState.Title>
                    <EmptyState.Description>
                        Не удалось найти пользователя по заданным фильтрам
                    </EmptyState.Description>
                </EmptyState>
            )}
        </Table>
    )
}

export default UserTable
