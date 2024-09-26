import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '74ee3ef9-a41e-43c4-b9c7-ac3a194be05d', title: 'PATENT_TITLE_4604' },
                { id: 'd93a87e7-b15f-49fe-94c9-a78c73354583', title: 'PATENT_TITLE_3922' },
                { id: '78e30c81-a526-4b89-a67f-d935e1b47d0a', title: 'PATENT_TITLE_3891' },
                { id: 'c086df30-ef99-4693-8e5d-7f88a93a2e88', title: 'PATENT_TITLE_1573' },
                { id: '2981686a-ece5-4375-ad6a-a852a022b79c', title: 'PATENT_TITLE_6382' },
                { id: 'e7096373-e5f6-429d-b3a1-78eaad302784', title: 'PATENT_TITLE_3964' },
                { id: '32c31f3e-5ce8-4fc9-9608-d63057a672c7', title: 'PATENT_TITLE_5589' },
                { id: '55203d90-7da9-4eec-bb81-263a9f7c7ef3', title: 'PATENT_TITLE_2126' },
            ]}
        />
    </Box>
)

export default App