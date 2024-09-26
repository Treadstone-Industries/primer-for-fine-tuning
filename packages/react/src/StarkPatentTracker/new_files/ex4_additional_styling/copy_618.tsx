import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1892a0d0-cfb9-446e-ac95-5c5d86838032', title: 'PATENT_TITLE_4520' },
                { id: 'cc37cc73-40bd-4902-a5b6-bcefec3e240b', title: 'PATENT_TITLE_3580' },
                { id: 'ed0aec84-7ef7-477d-a210-5d0d1900cecc', title: 'PATENT_TITLE_6338' },
                { id: '9e3a580c-94f3-467f-a2ed-ca9af5f3dd6d', title: 'PATENT_TITLE_4318' },
                { id: '3110420a-5afa-4656-9c64-bd31c60a71a5', title: 'PATENT_TITLE_8807' },
                { id: 'f57f81bb-59fe-4a8a-a232-264425e086d5', title: 'PATENT_TITLE_9181' },
            ]}
        />
    </Box>
)

export default App