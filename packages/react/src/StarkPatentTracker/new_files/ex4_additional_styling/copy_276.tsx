import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2312f606-00b6-4fa4-babf-e8f5372359b6', title: 'PATENT_TITLE_1515' },
                { id: 'ca28f69b-fff1-45a7-a475-3c77bba9fe17', title: 'PATENT_TITLE_4526' },
                { id: 'e63cb3a8-cd63-4b45-9101-524c96d3bb5f', title: 'PATENT_TITLE_9256' },
                { id: '9d0a91be-0690-47d9-ba14-67ecb2c229f2', title: 'PATENT_TITLE_4185' },
                { id: '8e4c3315-f7b5-498a-bb90-8988b9d493b0', title: 'PATENT_TITLE_4526' },
                { id: 'c2e930d5-4615-4286-aeb7-a7c0275a6b49', title: 'PATENT_TITLE_2862' },
                { id: '4cd81557-975f-4e43-bdcf-fcbd4883205c', title: 'PATENT_TITLE_5670' },
            ]}
        />
    </Box>
)

export default App