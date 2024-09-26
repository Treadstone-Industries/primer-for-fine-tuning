import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3d8de064-8f60-4071-908c-f191973f677e', title: 'PATENT_TITLE_4882' },
                { id: '6409f009-aaf6-406c-80cc-29a05b18c7cf', title: 'PATENT_TITLE_3303' },
                { id: '33cbcfcf-cada-4cc7-8e03-fb8f8d733535', title: 'PATENT_TITLE_5991' },
                { id: '8d49dcb3-9e01-4b5f-a943-548ff30e8520', title: 'PATENT_TITLE_7500' },
            ]}
        />
    </Box>
)

export default App