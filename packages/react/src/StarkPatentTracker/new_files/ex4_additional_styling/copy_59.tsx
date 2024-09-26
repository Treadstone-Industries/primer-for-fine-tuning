import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'da625460-3c11-4733-8ad7-a15e64780ca0', title: 'PATENT_TITLE_2204' },
                { id: 'a18ff5ca-d027-4cde-955c-9c92c88a96ad', title: 'PATENT_TITLE_6035' },
            ]}
        />
    </Box>
)

export default App