import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'dbb43549-0158-4031-baa5-ad92b2a353bc', title: 'PATENT_TITLE_7794' },
                { id: 'f627af9d-1077-4d78-97d7-9597c5edd4b3', title: 'PATENT_TITLE_1303' },
                { id: '2b3d2963-fd12-4130-af8c-a1776c5b8f23', title: 'PATENT_TITLE_6440' },
                { id: '7f5fa501-9aac-4843-81c0-e95ee8fa8b54', title: 'PATENT_TITLE_5894' },
                { id: 'd854c7b3-0721-47c1-b91d-419222383553', title: 'PATENT_TITLE_9662' },
                { id: '23a68cc4-1001-4e47-b3da-fbba9f3b76ff', title: 'PATENT_TITLE_6980' },
                { id: '64487954-d670-4f17-a0ac-493aaf9228e0', title: 'PATENT_TITLE_4724' },
            ]}
        />
    </Box>
)

export default App