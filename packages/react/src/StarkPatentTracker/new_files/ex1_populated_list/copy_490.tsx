import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4ba02a87-4b1f-47a8-ae6e-edf237199a2f', title: 'PATENT_TITLE_7892' },
            { id: 'c03dd285-ffa1-42d8-8d64-6d022492306f', title: 'PATENT_TITLE_6013' },
            { id: '2f017725-7c15-4e75-891d-b8fa794ed2ff', title: 'PATENT_TITLE_7583' },
            { id: '737934fa-73e5-4523-9999-d32e56c30ff5', title: 'PATENT_TITLE_4788' },
        ]}
    />
)

export default App