import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6a889434-ff4f-47d9-a654-2e03106c4186', title: 'PATENT_TITLE_1452' },
                { id: '9444212c-50e5-442b-8973-c94875841f73', title: 'PATENT_TITLE_8083' },
            ]}
        />
    </Box>
)

export default App