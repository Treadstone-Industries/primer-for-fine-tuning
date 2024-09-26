import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1af10e72-af44-4f0d-9058-bfae0fd1b37c', title: 'PATENT_TITLE_5691' },
                { id: '5ef5ce6a-9b0b-46ea-bead-e157b1032c9c', title: 'PATENT_TITLE_7363' },
            ]}
        />
    </Box>
)

export default App