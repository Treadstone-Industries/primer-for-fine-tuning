import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a6c78a0f-1108-42ad-8356-b640ff61ca62', title: 'PATENT_TITLE_2965' },
                { id: '5bc35602-8cfc-4b07-a9c4-56204b4e407a', title: 'PATENT_TITLE_7308' },
                { id: 'a89f4491-b0e1-4977-a6e4-a775494af49e', title: 'PATENT_TITLE_9272' },
            ]}
        />
    </Box>
)

export default App