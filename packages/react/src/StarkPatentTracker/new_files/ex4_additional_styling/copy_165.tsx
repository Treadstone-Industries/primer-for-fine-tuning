import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c24d598c-a9e1-4f0b-892d-107077fc57a7', title: 'PATENT_TITLE_4343' },
                { id: '9498ca72-2bd5-4934-affc-2eaf2803d64d', title: 'PATENT_TITLE_8646' },
                { id: 'bce87c92-4186-47d5-9d89-51fda6f02670', title: 'PATENT_TITLE_8405' },
                { id: 'f3acfcf9-232c-4000-a030-7b27d6ccffd6', title: 'PATENT_TITLE_8071' },
            ]}
        />
    </Box>
)

export default App