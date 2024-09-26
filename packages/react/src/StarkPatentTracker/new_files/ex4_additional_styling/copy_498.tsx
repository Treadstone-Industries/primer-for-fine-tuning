import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'df16fe68-462f-41a7-866a-980ae5ac5e4c', title: 'PATENT_TITLE_8849' },
                { id: '74f89dad-f800-4e7f-81e3-b51adb43bda6', title: 'PATENT_TITLE_4340' },
                { id: '47a86a9d-05f7-43c0-a8bd-c3e924c7e015', title: 'PATENT_TITLE_4070' },
                { id: 'cc6cbd66-b7e8-45c4-9a5f-777c5b8117eb', title: 'PATENT_TITLE_9440' },
                { id: '86b1d3a5-6d12-4d9f-b804-c95553457cf8', title: 'PATENT_TITLE_7313' },
            ]}
        />
    </Box>
)

export default App