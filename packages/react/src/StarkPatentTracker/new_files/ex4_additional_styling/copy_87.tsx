import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '488f9e5e-e0b2-42f0-bb92-0f3796a1dd04', title: 'PATENT_TITLE_4037' },
                { id: 'c5d7c187-e34d-443a-8c96-fdb7a54b7c41', title: 'PATENT_TITLE_5554' },
                { id: '838815db-ea65-4bcb-87b9-b1fc36dfecbd', title: 'PATENT_TITLE_9297' },
                { id: '43de96df-cffd-48b4-b631-0b1aa8794971', title: 'PATENT_TITLE_7483' },
            ]}
        />
    </Box>
)

export default App