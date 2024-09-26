import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '74351731-ac45-4ca1-a407-02ffb1fa6b5b', title: 'PATENT_TITLE_2598' },
                { id: '8122b697-62c7-4c38-b7ab-3553d8e78b18', title: 'PATENT_TITLE_1959' },
                { id: '5e9b167c-cdec-458c-96e1-1ce1c10d9517', title: 'PATENT_TITLE_9102' },
                { id: '8e6dca3f-6c5d-402b-afe7-a46b8aee87b5', title: 'PATENT_TITLE_7078' },
            ]}
        />
    </Box>
)

export default App