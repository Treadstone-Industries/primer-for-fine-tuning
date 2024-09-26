import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8d41e2ab-3746-468f-bcb9-6a2045cf94e9', title: 'PATENT_TITLE_3034' },
                { id: 'af92123f-cef6-4b6e-ac5a-a49908fb1aab', title: 'PATENT_TITLE_5388' },
                { id: '4dbd60b8-1f33-40d5-9c7d-78c2e735bd45', title: 'PATENT_TITLE_2670' },
            ]}
        />
    </Box>
)

export default App