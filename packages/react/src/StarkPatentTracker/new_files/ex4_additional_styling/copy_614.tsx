import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e434360d-17dc-4be8-82e9-e72e53a88bd3', title: 'PATENT_TITLE_2598' },
                { id: '3e330707-eccf-4bce-945d-84cc618783f5', title: 'PATENT_TITLE_8181' },
                { id: '2672c074-3820-411e-b963-0ac1f87bdf1e', title: 'PATENT_TITLE_8966' },
                { id: '5ed79f9b-759a-4c31-b5d9-fbf5f75c2606', title: 'PATENT_TITLE_2617' },
                { id: 'f71c9335-7960-41d3-b545-7a47a6295c0e', title: 'PATENT_TITLE_7152' },
                { id: 'dd59f4dd-291b-4ffc-87a7-36554e7fa2f5', title: 'PATENT_TITLE_6496' },
            ]}
        />
    </Box>
)

export default App