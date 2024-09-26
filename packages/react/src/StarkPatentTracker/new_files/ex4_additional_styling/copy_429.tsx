import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2da4f446-2cdc-4c3c-a568-7a965376e4bd', title: 'PATENT_TITLE_4958' },
                { id: '5093bc2a-5e90-4876-91e9-e19e9e325425', title: 'PATENT_TITLE_6216' },
                { id: 'c09893a9-d7be-4ea3-8f21-a85cf85f4ec0', title: 'PATENT_TITLE_3237' },
                { id: 'bafae9d6-84b3-4d8f-9e24-e2be9b4a017f', title: 'PATENT_TITLE_4667' },
                { id: 'f4664f2c-f3ca-4678-9170-5e4c98e3204f', title: 'PATENT_TITLE_7216' },
            ]}
        />
    </Box>
)

export default App