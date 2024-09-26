import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c7f6c6ea-84a4-4797-a87f-c87d2313a10c', title: 'PATENT_TITLE_5268' },
                { id: '4af5c342-39bb-45d0-b97b-0904b22f54e7', title: 'PATENT_TITLE_1219' },
                { id: '4fb72e6e-8f3c-4aab-9caf-6e95a6a4fb1f', title: 'PATENT_TITLE_9243' },
                { id: '70a6d62b-3923-4649-9ff9-2410658ce574', title: 'PATENT_TITLE_6961' },
                { id: 'bc7d7aec-1ab3-4607-ab78-6e8c6994766c', title: 'PATENT_TITLE_3064' },
                { id: '01dfa9ef-08f7-4faa-a87a-0320cc8c05d0', title: 'PATENT_TITLE_4927' },
                { id: '05766dc1-c473-4f9f-8dac-9dc25a4d401e', title: 'PATENT_TITLE_2084' },
                { id: '03e4d724-0c6d-421c-91b7-4c369c37b40e', title: 'PATENT_TITLE_7685' },
                { id: '95f81faa-3b64-4c3f-b3d3-dc0df93621a6', title: 'PATENT_TITLE_7908' },
            ]}
        />
    </Box>
)

export default App