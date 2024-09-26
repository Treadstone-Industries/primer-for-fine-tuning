import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6f11142b-24da-4b83-aaeb-c85e7142fd76', title: 'PATENT_TITLE_6938' },
                { id: '9ca4b9a1-318d-4162-b05f-2486cd1ded3f', title: 'PATENT_TITLE_1431' },
            ]}
        />
    </Box>
)

export default App