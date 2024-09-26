import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3f2cb4ac-c5a8-4d80-8dcb-48990ff328c1', title: 'PATENT_TITLE_7805' },
                { id: '7df39344-5813-4552-88ca-3d40136a641b', title: 'PATENT_TITLE_3176' },
            ]}
        />
    </Box>
)

export default App