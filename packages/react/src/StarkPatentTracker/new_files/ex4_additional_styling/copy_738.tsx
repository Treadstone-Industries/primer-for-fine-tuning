import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'de7c31e8-4bbc-4c40-8e3a-87fbc889e5b6', title: 'PATENT_TITLE_8759' },
                { id: 'e6e2e86d-a4c0-45d5-9519-9c4445e27467', title: 'PATENT_TITLE_2819' },
                { id: 'e59044d3-2a69-47ab-9aa6-2fa543251d12', title: 'PATENT_TITLE_8912' },
                { id: '1633b250-baf7-457e-b2d9-cac51c668267', title: 'PATENT_TITLE_6670' },
                { id: 'c28247d9-3cc2-4f4f-91b4-0d37f6f5524f', title: 'PATENT_TITLE_6163' },
                { id: '03005f64-84ca-46b4-8fb3-38bf219e350f', title: 'PATENT_TITLE_8892' },
                { id: 'd6f73a42-c588-4d98-b851-827b5d093d49', title: 'PATENT_TITLE_9246' },
            ]}
        />
    </Box>
)

export default App