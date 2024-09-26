import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9d0b186b-e53b-4f33-82f9-49600fabcae4', title: 'PATENT_TITLE_7292' },
                { id: '8edb82e0-d398-433f-af0a-b6fab3a441e5', title: 'PATENT_TITLE_7564' },
                { id: '803464ad-2e82-4633-b87a-29ad61e8b28c', title: 'PATENT_TITLE_3635' },
                { id: '05c8bc8e-66eb-4d21-af53-c6640828d845', title: 'PATENT_TITLE_4034' },
                { id: '99d023cc-b8d1-40a5-bd6e-e126b5c3b5ba', title: 'PATENT_TITLE_3228' },
                { id: 'c371bc2e-a043-409f-b22a-670ce450e9b2', title: 'PATENT_TITLE_1724' },
            ]}
        />
    </Box>
)

export default App