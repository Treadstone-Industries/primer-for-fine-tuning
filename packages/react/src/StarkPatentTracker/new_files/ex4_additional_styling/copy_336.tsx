import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9de8d5dd-e4e5-4dd5-9b0d-85e214ea9fbf', title: 'PATENT_TITLE_9614' },
                { id: 'a517c1de-b4a5-4df4-938e-4bb961547a91', title: 'PATENT_TITLE_5575' },
                { id: 'cbe44ae4-ee89-4bca-bccf-0023b1b1182d', title: 'PATENT_TITLE_4761' },
                { id: '1a189d0a-e752-4b9e-ae04-e39c33c333fe', title: 'PATENT_TITLE_4000' },
            ]}
        />
    </Box>
)

export default App