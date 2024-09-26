import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '388d56c1-6968-4291-8883-dce878c3e1f6', title: 'PATENT_TITLE_7207' },
                { id: 'c11eadf8-40ac-4cdf-8190-aa25d3486e1f', title: 'PATENT_TITLE_9744' },
                { id: 'dd41becb-9b0b-4ef8-b79e-6ff336200ad1', title: 'PATENT_TITLE_4231' },
                { id: '1da8e699-b5ca-46e9-819e-0851d4f607d5', title: 'PATENT_TITLE_3920' },
                { id: '3f7bc48f-ef94-4e1a-af29-f74f8f05a68b', title: 'PATENT_TITLE_4555' },
                { id: '4e0462eb-4db0-4695-bbe3-5e5ba812e203', title: 'PATENT_TITLE_8935' },
            ]}
        />
    </Box>
)

export default App