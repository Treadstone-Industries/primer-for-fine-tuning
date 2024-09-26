import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3fb632db-9010-4afb-95e7-2bd63cc7a7a6', title: 'PATENT_TITLE_6875' },
                { id: '7e6064f0-8c91-4705-a15c-5d98eea55753', title: 'PATENT_TITLE_1502' },
            ]}
        />
    </Box>
)

export default App