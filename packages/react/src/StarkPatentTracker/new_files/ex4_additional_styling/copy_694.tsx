import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4c97d026-5485-4f57-9926-23b499433357', title: 'PATENT_TITLE_7714' },
                { id: '6dc47612-ae3a-4505-a70a-aa1ef77c5618', title: 'PATENT_TITLE_5558' },
                { id: '8dd72a35-5f14-4ed8-8309-415b1f1bc64c', title: 'PATENT_TITLE_1351' },
            ]}
        />
    </Box>
)

export default App