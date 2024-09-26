import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0fdb055e-e7a8-4741-bd8a-f74e767836f3', title: 'PATENT_TITLE_1890' },
                { id: '0856ace7-475a-4e89-b6ba-3cbe050ec981', title: 'PATENT_TITLE_2295' },
            ]}
        />
    </Box>
)

export default App