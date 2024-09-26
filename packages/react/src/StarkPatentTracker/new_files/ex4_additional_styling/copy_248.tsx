import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '398b7fbf-c668-42bd-88a3-0b9b31153820', title: 'PATENT_TITLE_8850' },
                { id: '7ea3fb9e-99c4-4f72-8417-bb1adf283034', title: 'PATENT_TITLE_6743' },
            ]}
        />
    </Box>
)

export default App