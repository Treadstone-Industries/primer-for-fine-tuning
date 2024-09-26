import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '396d067b-219c-4a4d-945e-bdbf3835cb27', title: 'PATENT_TITLE_7743' },
            { id: 'd5a6c8d2-43c4-448d-9c2a-52f43e7c3162', title: 'PATENT_TITLE_3302' },
            { id: '0d43abb3-f089-48d3-b488-6025acf15736', title: 'PATENT_TITLE_1283' },
        ]}
    />
)

export default App