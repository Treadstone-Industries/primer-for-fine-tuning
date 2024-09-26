import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c6958da3-0114-4bf9-8d87-88ba9320448c', title: 'PATENT_TITLE_3525' },
                { id: '9dad6ff6-799b-4e55-a716-301c61749b1b', title: 'PATENT_TITLE_8840' },
                { id: '0bf92191-d3e8-461a-bc7d-041fe0a58997', title: 'PATENT_TITLE_7558' },
                { id: 'b9860965-acb0-45b5-9fe1-91ba3e9b27ca', title: 'PATENT_TITLE_4080' },
                { id: '47810d59-65d3-417e-ad18-5503df917a65', title: 'PATENT_TITLE_9315' },
            ]}
        />
    </Box>
)

export default App