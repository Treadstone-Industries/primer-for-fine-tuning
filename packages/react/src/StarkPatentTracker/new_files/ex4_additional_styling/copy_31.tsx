import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '588e8daf-450b-4175-8156-7fc7c5a9af38', title: 'PATENT_TITLE_1932' },
                { id: 'bbc963e0-0e81-4774-bfb0-394f9faabcd4', title: 'PATENT_TITLE_1799' },
            ]}
        />
    </Box>
)

export default App