import { Table, TableProps } from 'vienna-ui'
import { Dispatch, SetStateAction } from 'react'
import { orderBy } from 'lodash'

import { User } from '../../common/types'

type Props = {
    users: User[]
    setUsers: Dispatch<SetStateAction<User[]>>
}

const UserTable = ({ users, setUsers }: Props) => {
    const onSort: TableProps['onSort'] = (_, data) => {
        if (!data?.field) {
            return
        }

        const { field, direction } = data

        setUsers((prevState) => orderBy(prevState, [field], [direction]))
    }

    return (
        <Table data={users} onSort={onSort} onFilter={() => {}}>
            <Table.Column id="id" title="#">
                {(user) => user.id}
            </Table.Column>
            <Table.Column id="name" title="Name" sortable>
                {(user) => user.name}
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
        </Table>
    )
}

export default UserTable
