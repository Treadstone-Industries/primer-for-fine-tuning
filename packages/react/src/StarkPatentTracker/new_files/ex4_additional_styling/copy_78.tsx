import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a4e84439-ba55-4fc6-81c3-b1d6cf00ebba', title: 'PATENT_TITLE_8091' },
                { id: '3f41d32e-4757-4211-98cd-ab6003f77c59', title: 'PATENT_TITLE_5603' },
                { id: 'c6398b0d-0284-44a8-93a6-86696bacf1ac', title: 'PATENT_TITLE_9719' },
                { id: 'ac8e2945-993b-4aec-b89f-8e0ecc1738bc', title: 'PATENT_TITLE_5638' },
                { id: '37419a0f-c071-4fbd-8139-04253d6d4d34', title: 'PATENT_TITLE_3469' },
                { id: '4bc659b1-4253-40e9-b4da-bf2c7e0f3ddf', title: 'PATENT_TITLE_8016' },
                { id: '177b094f-fd34-41ff-872e-87991f4b0220', title: 'PATENT_TITLE_1605' },
                { id: '40dca029-c59e-4836-b0d5-5e120fc30a7c', title: 'PATENT_TITLE_7195' },
            ]}
        />
    </Box>
)

export default App