import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '49940e7c-6692-418b-ad6f-bf83f0b275a1', title: 'PATENT_TITLE_8085' },
                { id: '537a4f26-b20c-40e6-95fa-d54f52eb62cf', title: 'PATENT_TITLE_7000' },
                { id: '8d42cb5b-58f6-406e-8da7-a195b85a25dd', title: 'PATENT_TITLE_1015' },
                { id: 'fb8e9324-ab46-41bb-a5c7-fabae158908f', title: 'PATENT_TITLE_8417' },
                { id: '19810ecb-0d8e-48b5-8307-e72e260a4bbb', title: 'PATENT_TITLE_5032' },
                { id: '8617a0e3-e344-4a9d-8b2d-76a32920d8cc', title: 'PATENT_TITLE_3048' },
            ]}
        />
    </Box>
)

export default App