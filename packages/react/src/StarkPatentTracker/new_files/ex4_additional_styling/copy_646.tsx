import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8b2575d4-b05d-4bb1-8099-b52153d299ce', title: 'PATENT_TITLE_8478' },
                { id: '5ec444ef-cae3-4ce7-a856-c440a8ed806f', title: 'PATENT_TITLE_2211' },
            ]}
        />
    </Box>
)

export default App