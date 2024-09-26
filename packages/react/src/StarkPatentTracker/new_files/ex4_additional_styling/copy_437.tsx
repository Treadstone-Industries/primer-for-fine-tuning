import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '420d8bce-64be-48c0-b8db-29fe34e04153', title: 'PATENT_TITLE_2423' },
                { id: '0bcefdd4-c6d8-44e2-8938-56001295b3b5', title: 'PATENT_TITLE_4430' },
                { id: 'a62b8308-c87e-4ff7-8e96-23e68af6ac2d', title: 'PATENT_TITLE_7113' },
                { id: 'df6db63c-002e-4694-acbd-4eb80f1233a5', title: 'PATENT_TITLE_9408' },
            ]}
        />
    </Box>
)

export default App