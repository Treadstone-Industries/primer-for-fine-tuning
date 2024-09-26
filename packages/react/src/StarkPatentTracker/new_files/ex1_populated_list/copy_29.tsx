import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f5c3f278-364f-4beb-ac02-5a6ea7b9455b', title: 'PATENT_TITLE_5316' },
            { id: 'e89589d1-a303-4084-9cdd-cd922ebc3897', title: 'PATENT_TITLE_1753' },
            { id: '57d29efc-3eff-404a-a3c0-f4024c975d2e', title: 'PATENT_TITLE_1118' },
            { id: '488e659a-b4ab-44f5-89de-b2c35acbd952', title: 'PATENT_TITLE_1785' },
            { id: '7276b66a-1e35-424d-80b2-d3755b4f6ba8', title: 'PATENT_TITLE_9306' },
            { id: 'b069a2fa-a3d5-4c80-9d11-c1149060eeed', title: 'PATENT_TITLE_1329' },
            { id: 'f9672d22-5609-492f-a02e-e758f3a334ef', title: 'PATENT_TITLE_1095' },
        ]}
    />
)

export default App