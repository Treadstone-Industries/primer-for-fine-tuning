import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a174c371-930b-48fc-8d7a-8456df69ffdc', title: 'PATENT_TITLE_3058' },
                { id: '902129de-c209-4c8b-bc0e-9bb4b709dd31', title: 'PATENT_TITLE_1460' },
            ]}
        />
    </Box>
)

export default App