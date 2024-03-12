import { Input, FormField } from 'vienna-ui'
import { Dispatch, SetStateAction } from 'react'
import { Filters } from '../../common/types'

type Props = {
    filters: Filters
    setFilters: Dispatch<SetStateAction<Filters>>
}

const FilterByName = (props: Props) => {
    const { filters, setFilters } = props;

    return (
        <FormField inline>
            <FormField.Label>Искать по имени</FormField.Label>
            <FormField.Content>
                <Input
                    placeholder="Введите значение"
                    value={filters.name}
                    onChange={(_, data) => { // data это объект, который возвращает функция onChange: { name: undefined, value: 'qwefc' }
                        setFilters((prevState) => ({ ...prevState, name: data?.value }))
                    }}
                />
            </FormField.Content>
        </FormField>
    )
}

export default FilterByName
