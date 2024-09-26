import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f57657e7-1e91-46ce-b132-859fe7bb8c27', title: 'PATENT_TITLE_9759' },
                { id: 'ce018f5f-314f-4d36-9b32-9d69d11e406b', title: 'PATENT_TITLE_1443' },
                { id: 'cab9a665-5a63-4774-af36-2d48269965e4', title: 'PATENT_TITLE_7165' },
                { id: '0044b6b7-30da-49fc-afae-18ad579cd412', title: 'PATENT_TITLE_4310' },
                { id: 'd89ec674-e64d-4672-9180-025fc801c108', title: 'PATENT_TITLE_8985' },
            ]}
        />
    </Box>
)

export default App