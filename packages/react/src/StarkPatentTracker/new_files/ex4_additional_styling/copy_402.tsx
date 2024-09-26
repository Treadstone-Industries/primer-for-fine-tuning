import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6b94b83a-460e-4371-9bec-276dea2fee45', title: 'PATENT_TITLE_3460' },
                { id: '67541ef8-36f7-4bf7-a4cb-a221830a2c7b', title: 'PATENT_TITLE_5987' },
                { id: 'fb3cb93e-a135-4a91-8a28-934ead4b413f', title: 'PATENT_TITLE_7137' },
                { id: 'a17a08f1-44bc-46f7-9a47-c71b87ebdc52', title: 'PATENT_TITLE_7717' },
            ]}
        />
    </Box>
)

export default App