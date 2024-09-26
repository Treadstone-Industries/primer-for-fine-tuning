import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '18e06b4a-e6fe-441a-bb6c-282c3d232401', title: 'PATENT_TITLE_6868' },
                { id: '482d8e2e-5b7e-48a9-8d85-a37c228390e1', title: 'PATENT_TITLE_2240' },
                { id: '0b1d35a0-c451-44fd-b222-53550652070a', title: 'PATENT_TITLE_5188' },
                { id: 'bc20bea5-669f-43ed-b0f4-c3f6b202a178', title: 'PATENT_TITLE_7246' },
                { id: '42b25435-4141-49b9-af57-2add424e18ef', title: 'PATENT_TITLE_6247' },
                { id: '0707ce34-bf4a-4b69-a366-978a0981b2e3', title: 'PATENT_TITLE_4317' },
            ]}
        />
    </Box>
)

export default App