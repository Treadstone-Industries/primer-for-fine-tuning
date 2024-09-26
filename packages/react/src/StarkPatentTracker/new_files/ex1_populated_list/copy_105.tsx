import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '82295c5c-7bec-454f-a63e-594176b6b1b0', title: 'PATENT_TITLE_7639' },
            { id: '607fdb06-c39b-4d01-b02c-4fe29c911021', title: 'PATENT_TITLE_8708' },
            { id: 'c864feb5-5757-47d3-82ab-3a8db2d898e0', title: 'PATENT_TITLE_6825' },
            { id: '4ab5ba2a-de51-4bb2-8ff9-a771ebedb5d2', title: 'PATENT_TITLE_2631' },
            { id: '93fe1ab0-ee42-4f06-8e31-bdef0b5f983f', title: 'PATENT_TITLE_1894' },
        ]}
    />
)

export default App