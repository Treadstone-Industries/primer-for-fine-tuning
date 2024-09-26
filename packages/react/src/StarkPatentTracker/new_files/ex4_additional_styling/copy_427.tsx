import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8a6ddd3f-f8f7-45d9-89b4-44ee5a94b25d', title: 'PATENT_TITLE_9474' },
                { id: '6cf9ada8-d4ee-4c62-864a-9c1592944665', title: 'PATENT_TITLE_8276' },
                { id: '609b73d8-5d8f-4599-8775-3bfa717ca3e2', title: 'PATENT_TITLE_5041' },
                { id: 'b27f27f8-9da1-4781-91c1-da2358116332', title: 'PATENT_TITLE_7481' },
                { id: 'a44a59c9-a1b5-49e9-992b-552e90b0752d', title: 'PATENT_TITLE_5317' },
                { id: 'ed47e1f2-6993-444e-b973-be6b1e106e3b', title: 'PATENT_TITLE_4188' },
                { id: 'e389995e-1e03-412d-af93-0a43bc342e6e', title: 'PATENT_TITLE_3074' },
                { id: 'b9a4fda5-9e55-4f2e-ae94-65c3e9a1cbf6', title: 'PATENT_TITLE_2513' },
                { id: 'f5a008d6-5c00-48d5-a988-0762fad1e716', title: 'PATENT_TITLE_9173' },
            ]}
        />
    </Box>
)

export default App