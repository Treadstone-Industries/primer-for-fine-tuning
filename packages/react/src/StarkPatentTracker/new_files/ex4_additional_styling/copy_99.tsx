import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bfd530af-32ae-4a1f-ae8b-b720fa46cb05', title: 'PATENT_TITLE_9267' },
                { id: '1fff4be2-234e-41fa-b358-4c4a6be864c0', title: 'PATENT_TITLE_5657' },
                { id: 'bb31aadf-3c99-47ae-9e6f-cbf3e2d80f7c', title: 'PATENT_TITLE_6624' },
                { id: 'aaf6d7a9-77c4-4e1b-ac6f-407a4246aace', title: 'PATENT_TITLE_1331' },
                { id: 'bca3bf6b-75f8-4b43-9cf1-3bb6068272f0', title: 'PATENT_TITLE_6687' },
                { id: '1271441c-8726-417e-aec7-cb186a0b8bfc', title: 'PATENT_TITLE_5728' },
                { id: 'd4e93cdc-2cb4-483a-a6fe-7841744139f5', title: 'PATENT_TITLE_3938' },
                { id: 'a2bdce94-79cd-46a6-a0f0-db981e3603d1', title: 'PATENT_TITLE_3748' },
                { id: 'cdf8020e-3c88-4b9f-9d23-cf3f272ca8bf', title: 'PATENT_TITLE_8581' },
                { id: '35d37a18-df9c-4461-8874-c74529150d24', title: 'PATENT_TITLE_2064' },
            ]}
        />
    </Box>
)

export default App