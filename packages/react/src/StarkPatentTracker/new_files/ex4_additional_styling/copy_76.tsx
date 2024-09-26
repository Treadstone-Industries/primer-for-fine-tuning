import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6c6376d2-f5d6-4ae0-aa3a-9318694f35fd', title: 'PATENT_TITLE_7198' },
                { id: '5493dd2a-b2c8-49d3-8556-da40daf92624', title: 'PATENT_TITLE_8611' },
                { id: '49256e4d-4f25-442d-98cf-bf936509bdad', title: 'PATENT_TITLE_5741' },
            ]}
        />
    </Box>
)

export default App