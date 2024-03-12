import { Body } from 'vienna-ui'
import styled from 'styled-components'

import Users from './components/Users/Users'

const Main = styled.div`
    padding: 20px 40px;
`

const App = () => {
    return (
        <Body>
            <Main>
                <Users />
            </Main>
        </Body>
    )
}

export default App
