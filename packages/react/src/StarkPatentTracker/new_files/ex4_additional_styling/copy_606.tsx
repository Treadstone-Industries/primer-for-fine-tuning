import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1b264c3f-59be-4e3f-92a8-668eec7c5c2c', title: 'PATENT_TITLE_5193' },
                { id: 'c5db43f8-96c1-4728-b81b-4bc7bd6aa8bc', title: 'PATENT_TITLE_3428' },
            ]}
        />
    </Box>
)

export default App