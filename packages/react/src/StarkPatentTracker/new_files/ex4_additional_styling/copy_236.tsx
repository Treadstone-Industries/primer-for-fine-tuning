import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '51adc68e-310a-46c7-a775-49b0969a7a37', title: 'PATENT_TITLE_3583' },
                { id: '59b2a511-a27d-4c53-9633-6fe5a6cde294', title: 'PATENT_TITLE_7277' },
                { id: '3a645264-0731-480b-9314-44ef9d9f8071', title: 'PATENT_TITLE_5652' },
            ]}
        />
    </Box>
)

export default App