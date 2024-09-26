import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1dcc111c-b27d-4ead-9c3d-9c13f1ec7a3c', title: 'PATENT_TITLE_2100' },
                { id: '96b85159-7a9c-4026-abc7-634e1abb03d8', title: 'PATENT_TITLE_9371' },
                { id: '41481355-63ca-48f7-b0db-de4980564946', title: 'PATENT_TITLE_6115' },
            ]}
        />
    </Box>
)

export default App