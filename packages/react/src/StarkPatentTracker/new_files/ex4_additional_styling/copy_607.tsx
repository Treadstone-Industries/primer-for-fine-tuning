import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'aa2aedff-f4dc-46b4-a5ed-fa18f8a5f59f', title: 'PATENT_TITLE_5565' },
                { id: '45c474c2-c899-4c2a-8867-958def842bf6', title: 'PATENT_TITLE_5955' },
                { id: '2f403aad-ea2f-492c-a9f0-2055ba4e73d3', title: 'PATENT_TITLE_8243' },
                { id: '65ec07c2-3058-4ced-8b9a-1c9bb6dcd795', title: 'PATENT_TITLE_2123' },
                { id: '47b6e8aa-fe36-4010-9008-5fd70cdf02c2', title: 'PATENT_TITLE_9823' },
                { id: 'b4bae9e6-3a80-4dfb-b4e4-6c42c5516b7a', title: 'PATENT_TITLE_6512' },
                { id: 'd648f358-c2e6-4dcf-a860-c478bd1f0e5c', title: 'PATENT_TITLE_7444' },
                { id: '4256acd9-a2f9-4d6a-b298-e4fb3f24f061', title: 'PATENT_TITLE_1899' },
                { id: '1f93db61-6f30-4128-8b32-685ac9572fda', title: 'PATENT_TITLE_1265' },
            ]}
        />
    </Box>
)

export default App