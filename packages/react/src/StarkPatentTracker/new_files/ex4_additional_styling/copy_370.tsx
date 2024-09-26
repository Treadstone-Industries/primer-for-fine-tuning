import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a7e9fbce-bd36-48a1-acda-fef2adb71009', title: 'PATENT_TITLE_7885' },
                { id: 'e00079ed-3e93-4c86-949b-720221d58041', title: 'PATENT_TITLE_1732' },
                { id: 'c06243bc-5895-402d-a2b8-85f65cccc761', title: 'PATENT_TITLE_2382' },
                { id: '33d0d47e-5dcb-466d-9f8a-f785536274c5', title: 'PATENT_TITLE_2074' },
                { id: 'd27cbb91-dc86-45eb-a32b-c120bb30298d', title: 'PATENT_TITLE_8496' },
                { id: 'b2c1e29e-8543-4490-ab8c-dcda7d1daf60', title: 'PATENT_TITLE_8638' },
                { id: '4982a5ce-5fa1-488d-963b-5940237d14b0', title: 'PATENT_TITLE_7237' },
                { id: '08398f04-1917-47a3-976b-dd9108606bd8', title: 'PATENT_TITLE_4047' },
                { id: '50d551f6-007e-4444-b6c5-74ae8a7c667a', title: 'PATENT_TITLE_7728' },
                { id: '6baec982-53ad-42a4-8086-c9e92bf7bf15', title: 'PATENT_TITLE_4693' },
            ]}
        />
    </Box>
)

export default App