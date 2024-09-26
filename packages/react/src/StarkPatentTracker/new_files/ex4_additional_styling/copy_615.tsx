import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ed6ac4ee-4ded-4cac-9c13-dada5ffd7fa9', title: 'PATENT_TITLE_8787' },
                { id: 'f9dc1b08-7f17-42e8-bb6d-b56b6439b1b0', title: 'PATENT_TITLE_6997' },
                { id: '654f5371-21a7-4677-a94a-3b13a5cf9fd5', title: 'PATENT_TITLE_9732' },
                { id: 'c17410b6-e30b-48fb-9457-cdaaf8d7baaa', title: 'PATENT_TITLE_7794' },
                { id: '8882b98a-7848-483c-8b45-0a141d270a9a', title: 'PATENT_TITLE_1483' },
                { id: '41dfd296-377f-4c5e-9c76-7c99b8a3c852', title: 'PATENT_TITLE_2837' },
            ]}
        />
    </Box>
)

export default App