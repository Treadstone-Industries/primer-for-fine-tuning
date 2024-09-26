import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'dd93dab5-5b9a-440a-ab96-680d1668a43c', title: 'PATENT_TITLE_2827' },
                { id: '4ccd6b75-a1b4-4293-93b8-5a53aa6767f3', title: 'PATENT_TITLE_9869' },
            ]}
        />
    </Box>
)

export default App