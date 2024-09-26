import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '29ac3ceb-9d86-4c01-ab9f-63500e7ee957', title: 'PATENT_TITLE_2626' },
                { id: '9b436a77-824a-4d6b-86a9-d3704dff9d9f', title: 'PATENT_TITLE_7220' },
                { id: '46fe0105-6e49-41f1-83d3-a95be18a13c3', title: 'PATENT_TITLE_6593' },
            ]}
        />
    </Box>
)

export default App