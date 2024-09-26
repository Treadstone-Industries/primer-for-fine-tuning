import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5c741ed9-c371-4042-b556-477521016667', title: 'PATENT_TITLE_9340' },
                { id: 'befa8c7a-d218-4fc1-b50d-98b3f3cab441', title: 'PATENT_TITLE_7269' },
                { id: 'db2078cd-dced-4e12-8eac-efabb1057765', title: 'PATENT_TITLE_5625' },
                { id: '1593aab8-0a63-4502-a57d-5e9df3a08f47', title: 'PATENT_TITLE_8158' },
            ]}
        />
    </Box>
)

export default App