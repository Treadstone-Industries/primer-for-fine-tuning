import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9a9234d1-d748-4ebc-a417-a7a16e14d0ab', title: 'PATENT_TITLE_1352' },
                { id: '1f9165c0-8e2f-4df5-964c-6dc30dd6338c', title: 'PATENT_TITLE_3614' },
                { id: 'e838fa40-de00-49b5-a9c9-2fa867e6508b', title: 'PATENT_TITLE_2431' },
            ]}
        />
    </Box>
)

export default App