import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '97fd0312-d098-42f2-8c1b-dea8d339e033', title: 'PATENT_TITLE_1571' },
            { id: 'a625b79a-5b1e-4f41-a049-861ca1fa02c9', title: 'PATENT_TITLE_1816' },
            { id: '82f050b4-69d8-4343-836f-7972f5d46e18', title: 'PATENT_TITLE_4331' },
            { id: 'b18a0a62-d894-4640-b3bb-6c9d0ac27719', title: 'PATENT_TITLE_1171' },
            { id: 'a0ba0d40-882a-48d8-bd7e-3a74358dac80', title: 'PATENT_TITLE_1528' },
        ]}
    />
)

export default App