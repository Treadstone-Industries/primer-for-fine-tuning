import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '414ecda4-96d0-4a3b-9e7e-e10c64c11c2a', title: 'PATENT_TITLE_8199' },
                { id: '319a288f-23e1-43f6-9bd4-096037c5a5a7', title: 'PATENT_TITLE_7573' },
            ]}
        />
    </Box>
)

export default App