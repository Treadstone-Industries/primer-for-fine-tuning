import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e4df9278-43ad-4e2a-b954-8ae9fd3b875b', title: 'PATENT_TITLE_1094' },
                { id: '636e76d3-2a92-46df-815b-83c2466401a4', title: 'PATENT_TITLE_7572' },
            ]}
        />
    </Box>
)

export default App