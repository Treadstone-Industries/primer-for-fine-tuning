import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '813b2af4-5c2a-411e-9d76-667021d2e9eb', title: 'PATENT_TITLE_4897' },
                { id: '7c186fc8-a441-4cfe-93f8-3ec4818ed3a3', title: 'PATENT_TITLE_5069' },
                { id: 'c71f9c5b-8a28-412d-951a-c9a1b5bbb8af', title: 'PATENT_TITLE_6125' },
                { id: '3e75ed54-1b85-4e77-acae-6fd759603648', title: 'PATENT_TITLE_8176' },
                { id: '0451c510-2d4b-4755-828a-425ff4f1605b', title: 'PATENT_TITLE_9922' },
                { id: '7a7bd6dd-5996-4f94-b0da-a4911310364b', title: 'PATENT_TITLE_7473' },
                { id: 'cb9f26e5-f475-4754-a14d-a94a4859d71d', title: 'PATENT_TITLE_8548' },
            ]}
        />
    </Box>
)

export default App