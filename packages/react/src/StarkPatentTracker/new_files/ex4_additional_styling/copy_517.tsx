import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2f53603b-29fc-4534-8321-f8ad1bba483a', title: 'PATENT_TITLE_5750' },
                { id: 'ccec3902-9780-402b-bb21-0a5f41b8bd09', title: 'PATENT_TITLE_5133' },
            ]}
        />
    </Box>
)

export default App