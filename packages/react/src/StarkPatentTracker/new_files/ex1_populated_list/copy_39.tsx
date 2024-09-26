import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b5ccf496-4d24-4b50-8da5-6c73761554a8', title: 'PATENT_TITLE_6226' },
            { id: 'df54b9c9-0cd6-4c3b-92ca-3f64c7cfa963', title: 'PATENT_TITLE_7480' },
            { id: 'd0762d40-3463-443d-9a9f-7ab891a4c577', title: 'PATENT_TITLE_6709' },
        ]}
    />
)

export default App