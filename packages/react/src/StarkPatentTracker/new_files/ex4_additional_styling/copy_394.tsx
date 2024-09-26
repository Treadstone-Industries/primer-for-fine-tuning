import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fc1fdd8c-a55a-4afe-822e-03f19e3aadec', title: 'PATENT_TITLE_1639' },
                { id: '89f889df-0e9e-4a64-9814-9d819c12fdc1', title: 'PATENT_TITLE_6888' },
            ]}
        />
    </Box>
)

export default App