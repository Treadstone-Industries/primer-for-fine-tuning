import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e5f3085d-103e-44ab-a4c6-0b434737bd4a', title: 'PATENT_TITLE_8596' },
                { id: '355a9ddc-ef84-491f-8f74-c3540100ed87', title: 'PATENT_TITLE_9553' },
                { id: 'd0022a50-944b-4c6b-8091-3708bb265a63', title: 'PATENT_TITLE_5318' },
            ]}
        />
    </Box>
)

export default App