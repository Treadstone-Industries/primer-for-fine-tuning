import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1d3cda16-0c78-41e9-a0f8-f9f2ba646d06', title: 'PATENT_TITLE_1037' },
                { id: 'c8999200-0414-483a-aeab-170c92cb06a5', title: 'PATENT_TITLE_4350' },
                { id: '5f6ac002-f246-4603-a5be-f83cc147e415', title: 'PATENT_TITLE_5008' },
                { id: '5fe0558b-97fb-4733-a3ed-9efc5a3275c5', title: 'PATENT_TITLE_7803' },
                { id: '4347442e-a2a0-42ac-9643-341adbcbfdda', title: 'PATENT_TITLE_2698' },
            ]}
        />
    </Box>
)

export default App