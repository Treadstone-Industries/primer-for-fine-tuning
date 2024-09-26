import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a1d6ae67-1d20-4e63-b2fb-026d7a3323f9', title: 'PATENT_TITLE_1656' },
                { id: '7cabda8e-c8d9-49cf-b9c4-c79788dd7e25', title: 'PATENT_TITLE_6772' },
                { id: 'e7af3c1c-ebd3-4ffe-a9a1-81f6bd038bfe', title: 'PATENT_TITLE_2115' },
            ]}
        />
    </Box>
)

export default App