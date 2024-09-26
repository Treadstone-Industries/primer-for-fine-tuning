import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7a98aab9-1cf3-4ad0-a5b5-812c9002fcfc', title: 'PATENT_TITLE_3090' },
                { id: '853e1772-974b-4651-9faa-33664a99532c', title: 'PATENT_TITLE_9117' },
                { id: '0813579e-2dda-4d87-a68c-d2e31f8cf50d', title: 'PATENT_TITLE_5951' },
                { id: '67499632-bb3a-4e5d-b286-6315c23f8821', title: 'PATENT_TITLE_2516' },
                { id: 'f05a7cd1-44c2-4be2-9c81-aa7cf14ca4fd', title: 'PATENT_TITLE_7715' },
                { id: '4a258c7f-e73a-444e-97cf-8b8ecf064f5e', title: 'PATENT_TITLE_9578' },
            ]}
        />
    </Box>
)

export default App