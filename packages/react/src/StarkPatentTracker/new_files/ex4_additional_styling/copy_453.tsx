import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd98a14fb-c0c4-42f6-902a-46f648ec2f0a', title: 'PATENT_TITLE_1039' },
                { id: 'db6d3186-bed4-4e7b-a502-707f77165f84', title: 'PATENT_TITLE_8670' },
            ]}
        />
    </Box>
)

export default App