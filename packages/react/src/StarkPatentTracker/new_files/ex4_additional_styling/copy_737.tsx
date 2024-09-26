import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4039d154-9b20-4b0f-a3d1-3e21b26b34d7', title: 'PATENT_TITLE_8857' },
                { id: 'c6cffb39-db8e-4ba0-902d-8abeb6313fe5', title: 'PATENT_TITLE_5905' },
                { id: '474b367f-e7d4-4f46-b7ef-52f021d78d97', title: 'PATENT_TITLE_4796' },
                { id: '24c631da-5e7c-4f09-835b-b7fe194a1c9b', title: 'PATENT_TITLE_8389' },
            ]}
        />
    </Box>
)

export default App