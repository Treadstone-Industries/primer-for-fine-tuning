import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1c5960ca-b6c2-4f89-8b23-bb0ff150504e', title: 'PATENT_TITLE_2891' },
            { id: '4bd3b573-9ff4-4966-ba71-0dbf4ffabc72', title: 'PATENT_TITLE_4626' },
            { id: '1f81a007-5611-4875-b3bb-39bcb0321d55', title: 'PATENT_TITLE_5453' },
        ]}
    />
)

export default App