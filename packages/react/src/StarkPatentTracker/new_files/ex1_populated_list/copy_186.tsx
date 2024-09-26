import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e8e9aab2-f082-4e9f-984f-d956e6b6f47e', title: 'PATENT_TITLE_6810' },
            { id: '4c91a4c0-b540-482a-9f24-b295a018051a', title: 'PATENT_TITLE_7830' },
            { id: '2357c64c-d398-403a-b07e-1131adad11ca', title: 'PATENT_TITLE_5350' },
            { id: '4681e324-e167-4170-8118-b838d3dd8e24', title: 'PATENT_TITLE_3153' },
            { id: '61d0cfff-8ebb-4ed4-a3f2-1e10c6a4cd00', title: 'PATENT_TITLE_9495' },
        ]}
    />
)

export default App