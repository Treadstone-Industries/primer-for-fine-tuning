import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a73a84b6-853a-451f-8ce5-cafa8d7b2feb', title: 'PATENT_TITLE_1556' },
                { id: 'fe428940-7498-40b5-b0f3-342acb3b85bc', title: 'PATENT_TITLE_1482' },
                { id: '80952d44-bbc2-4aa8-824b-1a53f0a3d191', title: 'PATENT_TITLE_6408' },
                { id: 'fa2d470e-289d-4a64-b2b2-f48f2e5bd6e0', title: 'PATENT_TITLE_9290' },
                { id: '97fa1559-3c52-47ca-9a14-58047c8a7f43', title: 'PATENT_TITLE_2274' },
            ]}
        />
    </Box>
)

export default App