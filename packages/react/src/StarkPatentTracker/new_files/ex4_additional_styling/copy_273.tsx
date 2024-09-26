import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6e6addba-5b06-4da8-9f51-a3f9af58b466', title: 'PATENT_TITLE_5267' },
                { id: '7539bb0f-3147-4a88-ae4d-991ed48beac3', title: 'PATENT_TITLE_1431' },
                { id: '616c9ef3-aa7e-4323-be3e-b03782400bb3', title: 'PATENT_TITLE_5690' },
                { id: '97774bc4-6f1d-4f70-bc88-42a03c2e5595', title: 'PATENT_TITLE_5814' },
                { id: '250e978a-4244-48ee-aba2-619579ff4a61', title: 'PATENT_TITLE_3561' },
                { id: '36d8e275-75c3-45c4-a60d-b0f9366026c9', title: 'PATENT_TITLE_6937' },
                { id: 'bc4acec8-fb35-44e8-9684-a83ca9b3fea9', title: 'PATENT_TITLE_9423' },
                { id: '341752ea-22a1-4d2d-977e-d1dbe9aed476', title: 'PATENT_TITLE_2752' },
                { id: 'cc2c2223-36d7-4ec2-a9bb-350e4f94f864', title: 'PATENT_TITLE_9081' },
            ]}
        />
    </Box>
)

export default App