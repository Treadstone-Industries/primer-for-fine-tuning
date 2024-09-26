import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3dd25bd3-20eb-48df-9730-cff34aea6375', title: 'PATENT_TITLE_7395' },
                { id: '7a675d1e-8aa8-4285-a484-882fee5e548e', title: 'PATENT_TITLE_4644' },
            ]}
        />
    </Box>
)

export default App