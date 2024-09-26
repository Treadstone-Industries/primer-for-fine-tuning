import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fb31812f-b9dc-431c-bc52-623a885d1a44', title: 'PATENT_TITLE_9584' },
                { id: 'd1519c9b-9843-48d9-935f-a59994fb6d72', title: 'PATENT_TITLE_9833' },
                { id: '4338a2e5-2617-4456-967f-01adee562ab1', title: 'PATENT_TITLE_7216' },
                { id: '183cc339-f1d2-4953-9a5d-bb07439419ae', title: 'PATENT_TITLE_3420' },
                { id: '616acf24-9374-4168-9f40-b7f616b442b0', title: 'PATENT_TITLE_2086' },
            ]}
        />
    </Box>
)

export default App