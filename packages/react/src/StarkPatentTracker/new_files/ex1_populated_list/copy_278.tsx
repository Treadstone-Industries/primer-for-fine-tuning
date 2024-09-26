import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '205879a3-f50d-41c2-9c13-6c6ec7088a21', title: 'PATENT_TITLE_9234' },
            { id: '574865ac-d37d-4318-b2d7-07c8099e21e8', title: 'PATENT_TITLE_2517' },
            { id: 'cbe90ba0-4fdd-436a-b116-b85685297713', title: 'PATENT_TITLE_1642' },
            { id: 'fe29c331-95a4-4520-863c-a80bb14dc8d3', title: 'PATENT_TITLE_8821' },
        ]}
    />
)

export default App