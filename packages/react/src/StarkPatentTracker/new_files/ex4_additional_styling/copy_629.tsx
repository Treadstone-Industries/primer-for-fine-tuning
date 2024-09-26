import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8466e566-01c9-4f49-8fbe-e70c52367d1b', title: 'PATENT_TITLE_3720' },
                { id: '4a2fca37-3a13-4580-92ad-c30672bb0ea2', title: 'PATENT_TITLE_6798' },
            ]}
        />
    </Box>
)

export default App