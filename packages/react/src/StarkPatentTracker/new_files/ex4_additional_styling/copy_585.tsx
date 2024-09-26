import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7ac1615d-0ceb-4a5e-b30c-4768895c8acb', title: 'PATENT_TITLE_4997' },
                { id: '3e8cc8e1-d71c-47fe-8d62-deac548f3475', title: 'PATENT_TITLE_8500' },
                { id: 'd60f860b-2082-460e-8f37-3d33c62a59f4', title: 'PATENT_TITLE_2508' },
                { id: '96330ea8-a09b-4082-8773-27c00e221457', title: 'PATENT_TITLE_4471' },
            ]}
        />
    </Box>
)

export default App