import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7ad2e6b5-a510-456c-a140-af64848d6938', title: 'PATENT_TITLE_4206' },
                { id: '8dd9a793-3658-42d2-83e6-ab04c04dafd5', title: 'PATENT_TITLE_8582' },
                { id: '45c9ff9c-2475-4823-ad64-22640d7b441c', title: 'PATENT_TITLE_5723' },
                { id: '167dacea-90cf-40f7-9ee0-add595bcb3f5', title: 'PATENT_TITLE_8401' },
                { id: '37c6d5d1-c3ca-4d86-abb3-53cb81a6308e', title: 'PATENT_TITLE_7888' },
                { id: '282b4558-1f14-43d7-86ba-7a091d46350b', title: 'PATENT_TITLE_3121' },
                { id: 'a5f2a80a-9739-4ae2-a942-900988addb81', title: 'PATENT_TITLE_8527' },
                { id: 'df402157-3f38-4573-ab4f-877ae0ce8ecd', title: 'PATENT_TITLE_7283' },
            ]}
        />
    </Box>
)

export default App