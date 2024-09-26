import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '873a11d0-90ad-4b13-a85f-f784c1dcb887', title: 'PATENT_TITLE_8392' },
                { id: '7f44fe77-c7dd-42a2-b5ea-abe55055cbed', title: 'PATENT_TITLE_8309' },
                { id: 'ca358d1e-706f-4208-9946-a3a0325a5231', title: 'PATENT_TITLE_6883' },
                { id: 'd5608a3b-72c0-4040-b2ca-b87872e132b4', title: 'PATENT_TITLE_2996' },
            ]}
        />
    </Box>
)

export default App