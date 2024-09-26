import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'dc9804eb-b99b-4582-aa86-35c68c7548b1', title: 'PATENT_TITLE_6878' },
                { id: '03726069-2b44-40d8-9ab6-a206a45e6652', title: 'PATENT_TITLE_5026' },
                { id: '09994d45-851e-4e06-81b2-64ffd1adf705', title: 'PATENT_TITLE_4293' },
                { id: 'bd80f9c8-c53f-4386-9372-4425f5c8af6b', title: 'PATENT_TITLE_2532' },
                { id: '2458bf65-f9b6-47f3-aafb-a2a79731af9b', title: 'PATENT_TITLE_1456' },
                { id: 'f23450e4-c197-46ba-9100-f4b10afd96a0', title: 'PATENT_TITLE_4487' },
                { id: '85c239f5-b080-4577-acec-b015c83ec8fa', title: 'PATENT_TITLE_5979' },
                { id: '4817a9fb-4724-4178-9679-fc42b72f7665', title: 'PATENT_TITLE_6418' },
                { id: 'a4a92a5f-943a-4d85-ab06-9311ee98868e', title: 'PATENT_TITLE_9812' },
                { id: '48d8d8f6-a19b-4b6d-80e6-7841affea9d9', title: 'PATENT_TITLE_1454' },
            ]}
        />
    </Box>
)

export default App