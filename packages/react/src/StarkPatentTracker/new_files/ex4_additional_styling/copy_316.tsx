import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bc15af7a-5cfd-44e3-a77e-7738002b457f', title: 'PATENT_TITLE_4158' },
                { id: 'b29e2033-2fb2-4f35-9f11-59c350d70a82', title: 'PATENT_TITLE_1282' },
                { id: 'b6ca31f5-c01c-49db-8333-a0a2f744f053', title: 'PATENT_TITLE_6489' },
            ]}
        />
    </Box>
)

export default App