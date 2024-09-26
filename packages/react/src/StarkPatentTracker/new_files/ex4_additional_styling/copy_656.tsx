import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '387a57f5-7944-49a3-8c5f-e407099b377a', title: 'PATENT_TITLE_4663' },
                { id: 'dd6f4ee6-fb13-4a72-8675-124f89d9b244', title: 'PATENT_TITLE_4126' },
                { id: '36c7bde6-c22a-4185-90c8-6443b3c2484a', title: 'PATENT_TITLE_7514' },
            ]}
        />
    </Box>
)

export default App