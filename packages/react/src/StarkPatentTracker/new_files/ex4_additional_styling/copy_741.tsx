import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '521b3c7b-20fb-4c5d-b5d0-e03be564bf64', title: 'PATENT_TITLE_6684' },
                { id: 'e5192e87-48bf-4249-b609-55d1ed60fabb', title: 'PATENT_TITLE_8300' },
                { id: '306bffae-74ee-48ba-afb0-5e4721473a73', title: 'PATENT_TITLE_8324' },
                { id: 'c0a34f50-0fa7-4ac7-aced-96ddb5b91670', title: 'PATENT_TITLE_8586' },
                { id: '0f9d678c-6b83-434e-8ff4-eb21f2d50840', title: 'PATENT_TITLE_8861' },
                { id: 'f626a15c-ca03-4a3a-81f5-3c124a07f76d', title: 'PATENT_TITLE_4789' },
                { id: '86264940-eb63-4abc-b0d1-5493fb9ab6ee', title: 'PATENT_TITLE_6809' },
                { id: '3cd8bb35-d236-4fc9-83fd-5ec60ded971e', title: 'PATENT_TITLE_5431' },
            ]}
        />
    </Box>
)

export default App