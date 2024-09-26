import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5dd7f03d-449f-4170-87a1-59563f3a3e45', title: 'PATENT_TITLE_1576' },
                { id: '799eaf24-b92b-4e4b-9f3f-ff7e225ef4ac', title: 'PATENT_TITLE_9081' },
                { id: 'aec44d9a-69d1-4731-b8c8-d39aa6cf7acd', title: 'PATENT_TITLE_8374' },
                { id: 'a825709c-6cb3-4fc8-8aa3-5a314815d479', title: 'PATENT_TITLE_9193' },
                { id: '3b471466-126a-4d66-b1e8-25c335206153', title: 'PATENT_TITLE_4610' },
                { id: '15e8b42c-967e-4cea-b7bd-15207c33560a', title: 'PATENT_TITLE_2061' },
                { id: 'bb5bf023-72eb-499b-9267-0eed9171b668', title: 'PATENT_TITLE_1897' },
                { id: '1f1955c1-8776-43c0-a050-72e66639ab41', title: 'PATENT_TITLE_9920' },
            ]}
        />
    </Box>
)

export default App