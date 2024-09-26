import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '29024dd1-89ad-4b2c-a69e-13d9ffe58712', title: 'PATENT_TITLE_1831' },
                { id: '3817aaab-37f8-478b-bbee-55f93865670f', title: 'PATENT_TITLE_8582' },
            ]}
        />
    </Box>
)

export default App