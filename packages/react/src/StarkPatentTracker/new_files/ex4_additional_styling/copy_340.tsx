import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b07e4125-0514-4c20-9af6-87b18769b093', title: 'PATENT_TITLE_5828' },
                { id: 'c6c2b3fe-10d8-4f25-8f29-8a87140c33df', title: 'PATENT_TITLE_3835' },
                { id: '424c67f0-49c3-4ca7-b098-c3b4331a7ea6', title: 'PATENT_TITLE_1166' },
                { id: '147836f5-813f-4262-9be9-4e237384a7ff', title: 'PATENT_TITLE_5678' },
                { id: '41e4cf4e-0fb6-4168-b4ca-93e633bc1940', title: 'PATENT_TITLE_1254' },
            ]}
        />
    </Box>
)

export default App