import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4c648497-0652-43a4-ab53-bde21e4260f9', title: 'PATENT_TITLE_4164' },
                { id: '4c438db0-3ebd-4ae6-9787-d05cb82cc14d', title: 'PATENT_TITLE_5986' },
            ]}
        />
    </Box>
)

export default App