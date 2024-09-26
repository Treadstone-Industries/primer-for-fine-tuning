import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f1ac6ca3-a61c-43a2-8289-db0691d6e1db', title: 'PATENT_TITLE_8217' },
                { id: 'a6173ee3-5b25-48de-b48e-7e5298728c9e', title: 'PATENT_TITLE_3800' },
                { id: '1a5f2ad5-c2ff-444c-89fc-6c809564d15c', title: 'PATENT_TITLE_4709' },
            ]}
        />
    </Box>
)

export default App