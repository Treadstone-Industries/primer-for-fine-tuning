import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd2a50257-38b7-404f-9fa0-42687028bcbb', title: 'PATENT_TITLE_8617' },
            { id: '85767f1d-e034-48da-9ebe-d1c9a13ca21a', title: 'PATENT_TITLE_5988' },
            { id: '83362f1f-311c-46ef-be65-57b3b21bedb9', title: 'PATENT_TITLE_4641' },
        ]}
    />
)

export default App