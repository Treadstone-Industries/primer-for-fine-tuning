import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '727525cc-d389-45ed-86a2-71b8af5a13c0', title: 'PATENT_TITLE_7973' },
                { id: 'bff899b7-2376-42d1-a5d5-85d1fc00c6d7', title: 'PATENT_TITLE_4683' },
                { id: '18ff4a7b-c846-43ed-b7c6-47c705d2f442', title: 'PATENT_TITLE_6337' },
            ]}
        />
    </Box>
)

export default App