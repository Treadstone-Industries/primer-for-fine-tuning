import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1653f396-0b81-4d49-ab60-713a4c6d5c59', title: 'PATENT_TITLE_9495' },
            { id: '95b6e4ad-d823-49d7-98b7-855db9fd4e13', title: 'PATENT_TITLE_8275' },
            { id: '49a79700-194d-49c4-8543-1634576f7acc', title: 'PATENT_TITLE_1807' },
            { id: 'e88ececf-1dee-4dc5-817d-46e28ca6d3f7', title: 'PATENT_TITLE_3981' },
            { id: '8a0525c3-4293-450a-bb32-742648f78d79', title: 'PATENT_TITLE_5124' },
        ]}
    />
)

export default App