import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'af5d710e-401d-4051-9387-a008869e67f8', title: 'PATENT_TITLE_3833' },
                { id: '48d2573c-a260-4ac7-9c42-b8f9ef727b40', title: 'PATENT_TITLE_8995' },
                { id: 'e48f9e09-f4b4-47df-9e68-ee3f971456db', title: 'PATENT_TITLE_8759' },
            ]}
        />
    </Box>
)

export default App