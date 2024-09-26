import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7e88eb9a-7c78-42b4-8797-bf745794664d', title: 'PATENT_TITLE_3340' },
                { id: '60e45716-46d5-4346-abf9-140271cda449', title: 'PATENT_TITLE_9185' },
            ]}
        />
    </Box>
)

export default App