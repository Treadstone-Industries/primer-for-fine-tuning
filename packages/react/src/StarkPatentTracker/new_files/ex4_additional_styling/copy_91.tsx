import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '116765f9-d0d1-4c16-b7eb-3a7a58cd4473', title: 'PATENT_TITLE_5220' },
                { id: '45c4eb6c-e1b3-4ecf-98ed-f509db882551', title: 'PATENT_TITLE_9307' },
            ]}
        />
    </Box>
)

export default App