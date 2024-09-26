import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4ae34266-34f7-4793-8a6d-6b6378114f8a', title: 'PATENT_TITLE_7198' },
                { id: '5b0231af-a613-4ec1-8672-a36ca09cdb3e', title: 'PATENT_TITLE_6302' },
            ]}
        />
    </Box>
)

export default App