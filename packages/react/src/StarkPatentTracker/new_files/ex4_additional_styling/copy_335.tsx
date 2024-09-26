import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8b7ff72f-5ba8-4c97-8a1f-7d59fd38bd4f', title: 'PATENT_TITLE_7179' },
                { id: '86c1b6ab-6689-488c-9e26-0ab5cc9663ce', title: 'PATENT_TITLE_8342' },
                { id: '5c01c615-39d5-4666-a6b5-56a326e1c3e3', title: 'PATENT_TITLE_2244' },
            ]}
        />
    </Box>
)

export default App