import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bb38f2a9-09b0-4e25-a304-a91bcb47751c', title: 'PATENT_TITLE_3339' },
                { id: '1c11dad3-869c-4acb-a182-7a5aad30c8e5', title: 'PATENT_TITLE_8273' },
                { id: 'b6b5e061-6684-440f-88b4-06ee8f6246e5', title: 'PATENT_TITLE_7147' },
                { id: 'c240e27b-d9e6-4d7a-ad6e-fa673678e4fa', title: 'PATENT_TITLE_7227' },
                { id: 'a74a0773-6cdc-4bda-81db-426fd4b3efee', title: 'PATENT_TITLE_4202' },
                { id: 'b48b4df6-0681-458d-a4c9-3c2a82999491', title: 'PATENT_TITLE_8029' },
                { id: '2158e0c6-1d3d-4223-96eb-ce3af85d8431', title: 'PATENT_TITLE_4783' },
                { id: 'fb242bb8-ade0-49f6-a67b-e2dae657cfc9', title: 'PATENT_TITLE_2922' },
                { id: '4add8263-87a6-4590-a593-7a3f92dbc12f', title: 'PATENT_TITLE_4730' },
            ]}
        />
    </Box>
)

export default App