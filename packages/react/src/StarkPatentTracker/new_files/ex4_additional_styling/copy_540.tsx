import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '47c91a1d-be45-4d4a-816b-1671399bd2b8', title: 'PATENT_TITLE_8691' },
                { id: '9ba91f27-f14d-4481-8447-ce04ff07d3ee', title: 'PATENT_TITLE_5206' },
                { id: '778e1d9b-52b6-4ffd-aab8-d7ab82510fab', title: 'PATENT_TITLE_2268' },
                { id: '8e735419-8247-48ba-876e-6cffca424d8f', title: 'PATENT_TITLE_4648' },
                { id: 'b706e367-c810-4a76-acea-93fd9da216ae', title: 'PATENT_TITLE_8035' },
            ]}
        />
    </Box>
)

export default App