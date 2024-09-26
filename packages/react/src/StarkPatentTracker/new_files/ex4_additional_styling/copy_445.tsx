import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e664e35a-2b05-4b24-a4d8-2456df6e4b3d', title: 'PATENT_TITLE_7753' },
                { id: '7158e53f-0c3b-4a94-9a49-dee2c7c81bb9', title: 'PATENT_TITLE_8805' },
                { id: '22d13b5a-aeb7-410b-b0cf-d683616f9874', title: 'PATENT_TITLE_9880' },
            ]}
        />
    </Box>
)

export default App