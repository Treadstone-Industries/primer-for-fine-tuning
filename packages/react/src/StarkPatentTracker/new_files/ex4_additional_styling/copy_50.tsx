import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '89615a82-42a4-4312-ab8a-1a9a9d3ff210', title: 'PATENT_TITLE_1826' },
                { id: '64779bdd-a059-4d6b-97a3-04000b854ef3', title: 'PATENT_TITLE_7903' },
                { id: 'd4fee4c4-71c7-4bd9-8e73-c9bf4a93cdc4', title: 'PATENT_TITLE_5801' },
                { id: 'a31a048c-1f68-42a3-a26b-9a028cd1f85a', title: 'PATENT_TITLE_8201' },
                { id: '346800de-a879-4d16-9d64-81f7278e9242', title: 'PATENT_TITLE_7998' },
                { id: '55a9eed3-e631-41eb-8e6e-737cc105cc18', title: 'PATENT_TITLE_7651' },
                { id: '60caf098-55bf-47e5-a30e-2891304b0731', title: 'PATENT_TITLE_4556' },
                { id: 'ebbce249-8333-421d-b833-97cbf8ba3b6b', title: 'PATENT_TITLE_6392' },
            ]}
        />
    </Box>
)

export default App