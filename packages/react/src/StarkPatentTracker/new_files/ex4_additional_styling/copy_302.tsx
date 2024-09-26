import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '03cfedd6-37e6-450e-a35f-8491d9b18232', title: 'PATENT_TITLE_5537' },
                { id: 'aff27640-f1b0-409e-afad-5b89d8a30a41', title: 'PATENT_TITLE_8199' },
            ]}
        />
    </Box>
)

export default App