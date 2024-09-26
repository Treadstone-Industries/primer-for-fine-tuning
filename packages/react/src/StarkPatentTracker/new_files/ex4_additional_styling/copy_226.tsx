import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6599267f-933c-4139-9cc5-93d864f8b69e', title: 'PATENT_TITLE_2098' },
                { id: 'b204e81e-ca6b-4ccb-a3ca-51e2249e9776', title: 'PATENT_TITLE_3541' },
                { id: 'c2903a8d-c3e8-4fb4-ac98-dcf6225e3b1c', title: 'PATENT_TITLE_5861' },
                { id: '62daaab8-9ab8-414c-a921-12dff658beb3', title: 'PATENT_TITLE_8108' },
            ]}
        />
    </Box>
)

export default App