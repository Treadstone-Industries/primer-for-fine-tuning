import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '37815c9b-e0b7-450a-9efa-795950308e81', title: 'PATENT_TITLE_2819' },
                { id: '01f96992-dd9f-46f7-bf97-9d62ceff0897', title: 'PATENT_TITLE_9128' },
                { id: '580763c9-0bc1-4f32-ae3d-8917c20e9436', title: 'PATENT_TITLE_6866' },
                { id: 'b7e5349f-33cd-4a3a-a215-bda5c9f5ff6a', title: 'PATENT_TITLE_7572' },
                { id: '24366af8-ed60-4cdb-886d-f04a331cf3cd', title: 'PATENT_TITLE_9362' },
            ]}
        />
    </Box>
)

export default App