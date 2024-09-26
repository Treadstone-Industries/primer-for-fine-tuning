import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9b01d4a2-4c3b-4b00-a7b1-4a0161a1e2a5', title: 'PATENT_TITLE_9128' },
                { id: '010b1680-fa9e-430c-9942-e8ce9c09d46b', title: 'PATENT_TITLE_6368' },
                { id: 'bba0aff5-6ab3-43a5-b9b0-e27086822505', title: 'PATENT_TITLE_8228' },
                { id: 'caabe2c4-8f98-4c08-9cb1-773027ef5a36', title: 'PATENT_TITLE_1495' },
                { id: '223f36e1-ff0e-44f0-8de9-c91bb2fc5ebc', title: 'PATENT_TITLE_2030' },
            ]}
        />
    </Box>
)

export default App