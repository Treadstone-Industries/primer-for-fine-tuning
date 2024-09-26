import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0653a818-a92c-410f-b766-f89cf2e5fcf0', title: 'PATENT_TITLE_9727' },
                { id: '2e94d7b6-a2ca-4e21-9f69-bca7b1b3848c', title: 'PATENT_TITLE_9357' },
                { id: '0ff8ede8-70e9-448b-b970-5285f1062221', title: 'PATENT_TITLE_5884' },
                { id: 'c437a3fa-2ce6-47e5-bf31-2cee6d6cc989', title: 'PATENT_TITLE_1812' },
                { id: '20054e9c-b98e-42df-996c-75f6a29e5f6e', title: 'PATENT_TITLE_8365' },
            ]}
        />
    </Box>
)

export default App