import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8daa254c-ba6d-4a87-9cff-be868c3aec53', title: 'PATENT_TITLE_3586' },
                { id: '4f152942-b7ca-40e5-83a4-99c120e1b0df', title: 'PATENT_TITLE_2129' },
                { id: '7f73f7ad-e0d9-4136-897b-81a64af6177e', title: 'PATENT_TITLE_4923' },
            ]}
        />
    </Box>
)

export default App