import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fdb53204-52d6-484d-9c3a-145c621d5731', title: 'PATENT_TITLE_8259' },
            { id: '116495fc-04fa-47e7-85a6-96714a5f930c', title: 'PATENT_TITLE_4744' },
            { id: '513bb1ec-ecb9-405d-bb00-edd809ed75a4', title: 'PATENT_TITLE_5912' },
        ]}
    />
)

export default App