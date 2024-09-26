import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '15c58dc6-92fe-46c1-ba79-d8cbf646a588', title: 'PATENT_TITLE_8913' },
                { id: '86b0faec-1588-4f62-b216-5c30ddfbb191', title: 'PATENT_TITLE_2570' },
                { id: '72e21910-a0df-430f-9a9d-0dae938ca943', title: 'PATENT_TITLE_5762' },
            ]}
        />
    </Box>
)

export default App