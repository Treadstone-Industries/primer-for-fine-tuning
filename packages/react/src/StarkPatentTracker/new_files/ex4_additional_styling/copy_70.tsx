import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1b6af97f-cac8-47f1-a951-0079f82e7bb2', title: 'PATENT_TITLE_3768' },
                { id: '579cca5f-9bb8-4299-8f2e-2888e68a84e4', title: 'PATENT_TITLE_2066' },
                { id: '017c62bc-e71e-468f-86d4-a8bb5d88b891', title: 'PATENT_TITLE_8485' },
                { id: 'ef5439fe-a4cf-41de-81cf-ecb954231b52', title: 'PATENT_TITLE_5000' },
            ]}
        />
    </Box>
)

export default App