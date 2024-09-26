import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b4c221e3-73a4-4da6-941f-4f713a3827a1', title: 'PATENT_TITLE_6308' },
                { id: '66d008c7-db5c-4751-a574-4639de370646', title: 'PATENT_TITLE_5366' },
                { id: '5c82d13a-3f8b-4ee0-9042-c58d05c3ea5b', title: 'PATENT_TITLE_3935' },
                { id: 'efd3b05c-ca85-48f1-9a8d-9389c099bef9', title: 'PATENT_TITLE_6611' },
                { id: '1b73242b-9803-40da-b51e-51066aef2bdc', title: 'PATENT_TITLE_7602' },
                { id: 'a3f0a4d5-7b2a-4ed6-b749-cca5e1b42cc2', title: 'PATENT_TITLE_5284' },
                { id: 'a0980784-2615-4c87-a06a-10ea421c1877', title: 'PATENT_TITLE_9126' },
                { id: '086d4fba-ab54-487c-844b-b5c4d90d9d32', title: 'PATENT_TITLE_6559' },
                { id: '1b5e79e1-1cd1-4c94-9964-42c9a38ddd18', title: 'PATENT_TITLE_4274' },
            ]}
        />
    </Box>
)

export default App