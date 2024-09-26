import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4c130e34-9967-45b0-8f78-65813a9e21cf', title: 'PATENT_TITLE_6536' },
                { id: '05aa6056-ef94-4e37-ae7c-f1dfada3e2c8', title: 'PATENT_TITLE_1411' },
                { id: '74c490f9-bf5c-4f1c-8660-67416951030e', title: 'PATENT_TITLE_3572' },
            ]}
        />
    </Box>
)

export default App