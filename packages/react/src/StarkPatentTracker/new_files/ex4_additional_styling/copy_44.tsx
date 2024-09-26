import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd1fb77a9-b5f1-4a91-8d3b-fb99484e8bf9', title: 'PATENT_TITLE_9391' },
                { id: 'f0c3f0aa-58bc-487e-b60e-40272faf170b', title: 'PATENT_TITLE_1033' },
                { id: '680f4ac8-10e7-4de1-9da2-540b77a938f9', title: 'PATENT_TITLE_9319' },
                { id: 'fd1fcdce-bff7-43e8-934d-74e9ae1ce5a8', title: 'PATENT_TITLE_5945' },
                { id: '9fa4029c-1b0d-441e-b8d7-5fc46284b1e5', title: 'PATENT_TITLE_8444' },
                { id: '55699f50-3855-458d-9016-2948d280d3b9', title: 'PATENT_TITLE_1991' },
            ]}
        />
    </Box>
)

export default App