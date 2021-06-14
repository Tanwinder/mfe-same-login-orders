import React from 'react'
import { Container } from 'reactstrap'
import {Provider} from 'react-redux'
import '../styles/index.scss'
import Header from './Header/Header'
import store from '../store'

import Orders from './Orders/Orders'

const App = () => {
    return(
        <div className="orders">
            <Provider store={store}>
                {/* <Header/> */}
                <Container>
                    <Orders />
                </Container>
            </Provider>
        </div>
    )
}

export default App;