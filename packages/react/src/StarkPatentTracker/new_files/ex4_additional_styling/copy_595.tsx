import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5f1018d9-6a6d-4aad-a0dc-7cf256c9efb3', title: 'PATENT_TITLE_8297' },
                { id: 'b07727a0-4998-45ca-978b-bdb5ff86a4ba', title: 'PATENT_TITLE_4448' },
            ]}
        />
    </Box>
)

export default App