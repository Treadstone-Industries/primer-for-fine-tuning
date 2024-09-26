import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '01760ad5-b3b9-4b4e-ad8b-bb09a9a69c1a', title: 'PATENT_TITLE_9915' },
                { id: '4f97f661-c9b3-4097-935c-364b89ee65ca', title: 'PATENT_TITLE_3670' },
            ]}
        />
    </Box>
)

export default App