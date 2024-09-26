import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd15d11d3-918b-4f3d-ad62-b8cafb7ce887', title: 'PATENT_TITLE_2648' },
                { id: 'd16bd339-0b70-4537-b5ef-6935e3629e2d', title: 'PATENT_TITLE_2925' },
                { id: '09b9dac8-aa3f-4a90-9611-77b5ab8fda6c', title: 'PATENT_TITLE_7456' },
                { id: '1d3590ab-a0cc-4b8c-a4d8-a836ec524386', title: 'PATENT_TITLE_7010' },
            ]}
        />
    </Box>
)

export default App