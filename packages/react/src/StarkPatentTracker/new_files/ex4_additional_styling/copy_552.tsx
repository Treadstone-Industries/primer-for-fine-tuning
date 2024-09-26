import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '72230e8d-78bc-49e3-8823-0436b37d2362', title: 'PATENT_TITLE_8413' },
                { id: 'b2a5336f-a254-4081-91df-585b0e8a81f4', title: 'PATENT_TITLE_7470' },
                { id: 'e75a642d-a652-4a27-8874-103cd2b38334', title: 'PATENT_TITLE_6201' },
                { id: 'e2e377eb-3111-4a9a-97f4-40fd9d6aa624', title: 'PATENT_TITLE_3911' },
                { id: '1a7847e3-7941-42b8-a445-f6ae555147a2', title: 'PATENT_TITLE_7508' },
                { id: '6a93a1b2-ce2f-491e-bd45-be5a2cda5807', title: 'PATENT_TITLE_2570' },
                { id: 'cf01e8c6-d05b-4732-be38-e2804215da66', title: 'PATENT_TITLE_6695' },
            ]}
        />
    </Box>
)

export default App