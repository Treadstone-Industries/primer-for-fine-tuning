import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1bc27599-c77b-4f66-8d86-46ea25abb400', title: 'PATENT_TITLE_4238' },
                { id: 'd5130669-f233-4391-b3e0-7ab39dff0458', title: 'PATENT_TITLE_1545' },
            ]}
        />
    </Box>
)

export default App