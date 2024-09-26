import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '465c4fa3-35f8-4846-8d2e-ba7812e72f18', title: 'PATENT_TITLE_6806' },
                { id: 'a868fd4a-03a4-4a3f-9f74-a7b7c3253f5c', title: 'PATENT_TITLE_4500' },
                { id: '2099277c-66fc-4c92-a4bb-434cc872d1ca', title: 'PATENT_TITLE_1010' },
            ]}
        />
    </Box>
)

export default App