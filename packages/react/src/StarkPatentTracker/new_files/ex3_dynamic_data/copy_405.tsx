import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '922cf7e4-96c8-4925-a71e-b875785a2b3f', title: 'PATENT_TITLE_1695' },
        { id: '4ae18553-1a8e-4131-b1c2-0f1794afb8a0', title: 'PATENT_TITLE_7323' },
        { id: '6d1253f9-0489-489b-87e0-c1fa51d9cceb', title: 'PATENT_TITLE_2846' },
        { id: '00522156-4fc3-4fea-a78c-61c6c2cca491', title: 'PATENT_TITLE_3959' },
        { id: '14a17dff-5c91-41de-b075-ef74351cdc79', title: 'PATENT_TITLE_1160' },
        { id: 'd7de2e76-b62d-4d05-96d4-2dca8cfdafd9', title: 'PATENT_TITLE_1632' },
        { id: 'aa9dbc17-908c-4260-b784-47c987993afe', title: 'PATENT_TITLE_7789' },
        { id: 'c5705dc5-17ea-477d-b168-37ea2b6e9a4f', title: 'PATENT_TITLE_9462' },
        { id: 'c25fd4f1-568a-425a-be89-6f33b031cca0', title: 'PATENT_TITLE_7204' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App