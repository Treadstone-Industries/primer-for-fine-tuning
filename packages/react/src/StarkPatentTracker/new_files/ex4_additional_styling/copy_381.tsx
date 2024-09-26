import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0f8865fd-4228-44c9-b107-58269e522ed2', title: 'PATENT_TITLE_7318' },
                { id: 'd36264cc-38df-44fa-9770-7938627fb7d3', title: 'PATENT_TITLE_2060' },
                { id: '4df57ba4-d57a-46ce-a0bf-28ddb55f6cc7', title: 'PATENT_TITLE_3936' },
                { id: '0fec7477-04de-457d-a1b4-d9818eea0655', title: 'PATENT_TITLE_9749' },
            ]}
        />
    </Box>
)

export default App