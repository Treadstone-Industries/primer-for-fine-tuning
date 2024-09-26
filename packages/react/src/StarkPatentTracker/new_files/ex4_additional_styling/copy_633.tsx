import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a96cd368-a457-4d15-806d-a97f5390968e', title: 'PATENT_TITLE_1210' },
                { id: 'a7c27808-97a3-4bce-9491-6774c1a39db3', title: 'PATENT_TITLE_2545' },
            ]}
        />
    </Box>
)

export default App