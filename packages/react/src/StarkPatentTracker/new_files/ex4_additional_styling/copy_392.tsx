import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd454b487-cd95-4edd-99dd-e2a166368dfe', title: 'PATENT_TITLE_5039' },
                { id: '4c95f372-5f66-49f9-a22a-0f6d38e9c2a1', title: 'PATENT_TITLE_5639' },
                { id: 'a64b183c-9e2d-4ee7-aa7f-7afbffb216d2', title: 'PATENT_TITLE_2004' },
                { id: '80942657-a6e7-4b56-9c05-a62150255687', title: 'PATENT_TITLE_8952' },
                { id: '3902f5b4-4dcc-4b26-ba75-71e947a98131', title: 'PATENT_TITLE_3323' },
            ]}
        />
    </Box>
)

export default App