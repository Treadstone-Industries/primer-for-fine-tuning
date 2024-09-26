import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '777172cc-eca1-4d44-8f22-2d9cb57b39a9', title: 'PATENT_TITLE_1608' },
                { id: 'dbb97083-f2cf-4b40-ad04-57e00a7ad12d', title: 'PATENT_TITLE_7126' },
                { id: 'a6ee22c4-3c45-40cf-beee-4425a0c49108', title: 'PATENT_TITLE_7957' },
                { id: '2158d13a-6a1c-4c6b-a34e-843da79f50f9', title: 'PATENT_TITLE_4417' },
                { id: '20e03258-c5a0-4b2b-89b2-5c42ebb87c23', title: 'PATENT_TITLE_5191' },
                { id: '23afcfba-08e0-45df-ae7f-247a5d259ab9', title: 'PATENT_TITLE_7544' },
                { id: 'd8e63579-c3b4-4242-bed6-0ee78c44de72', title: 'PATENT_TITLE_1314' },
            ]}
        />
    </Box>
)

export default App