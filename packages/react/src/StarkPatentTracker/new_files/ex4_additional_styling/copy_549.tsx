import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f4ab6469-bfaf-439a-8a0d-6c85f5d3e551', title: 'PATENT_TITLE_6199' },
                { id: 'cdd78df4-fe84-4aa2-9cde-e0ff76647638', title: 'PATENT_TITLE_9945' },
                { id: '4164199f-97f4-47aa-80f2-4b03de5c8444', title: 'PATENT_TITLE_4997' },
                { id: '5004d828-8484-4fb8-94c3-061928fbe983', title: 'PATENT_TITLE_8081' },
                { id: '2cde1bc2-a379-4200-819d-b30a8fda1d5d', title: 'PATENT_TITLE_2669' },
            ]}
        />
    </Box>
)

export default App