import { Input, FormField } from 'vienna-ui'
import { Dispatch, SetStateAction } from 'react'
import { Filters } from '../../common/types'

type Props = {
    filters: Filters
    setFilters: Dispatch<SetStateAction<Filters>>
    fieldName: string
    label: string
}

const Filter = (props: Props) => {
    const { filters, setFilters, fieldName, label } = props

    return (
        <FormField inline>
            <FormField.Label>{label}</FormField.Label>
            <FormField.Content>
                <Input
                    placeholder="Введите значение"
                    value={filters[fieldName]}
                    onChange={(_, data) => {
                        setFilters((prevState) => ({
                            ...prevState,
                            [fieldName]: data?.value,
                        }))
                    }}
                />
            </FormField.Content>
        </FormField>
    )
}

export default Filter
