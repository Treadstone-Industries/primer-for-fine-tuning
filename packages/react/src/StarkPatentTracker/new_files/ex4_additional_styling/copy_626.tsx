import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '510360dd-4bb3-492b-ad42-4071184adfcc', title: 'PATENT_TITLE_8762' },
                { id: '9dd3daca-7855-467d-836e-8c56bf28916f', title: 'PATENT_TITLE_8420' },
                { id: '37ce6f34-f8b2-401a-b2ac-15cac43fa951', title: 'PATENT_TITLE_5043' },
                { id: '72f4b5e5-7c53-4f9e-b159-994c3945f86b', title: 'PATENT_TITLE_9498' },
                { id: '35fd6e82-3119-4a9f-a44a-7218f9501b9b', title: 'PATENT_TITLE_5792' },
                { id: 'e981624f-2afe-49ca-a908-95ecedef4ddb', title: 'PATENT_TITLE_8633' },
                { id: '200da5b9-054d-4c41-9013-6ffb1c67278c', title: 'PATENT_TITLE_7937' },
                { id: '47828e9d-d582-4e22-b6c8-4d59bf3c386f', title: 'PATENT_TITLE_9694' },
            ]}
        />
    </Box>
)

export default App