import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0849f7a1-09a6-4862-aa81-aaeb144d6ea1', title: 'PATENT_TITLE_4564' },
                { id: 'caeb2bb4-9a47-4f2e-b622-73b95cc560d2', title: 'PATENT_TITLE_2665' },
                { id: 'c9adfa3f-1d8e-4e62-83f4-907110426e9a', title: 'PATENT_TITLE_8202' },
                { id: 'e114dfb4-8eff-47e8-9ad9-1b6876c9c911', title: 'PATENT_TITLE_1027' },
                { id: '6579022b-dd9f-4729-b63a-520a184d1a97', title: 'PATENT_TITLE_3169' },
                { id: '71fe9a30-d313-4af9-9846-dab89444664d', title: 'PATENT_TITLE_1043' },
                { id: 'b9b3e6ea-f94f-4e9e-940b-7a4ce0ec0df0', title: 'PATENT_TITLE_9151' },
                { id: 'd215d90a-fb14-4b48-8a45-c25366d26f50', title: 'PATENT_TITLE_2944' },
                { id: 'f49afbc2-fb82-49ca-b0d5-2e2978867a0f', title: 'PATENT_TITLE_6751' },
            ]}
        />
    </Box>
)

export default App