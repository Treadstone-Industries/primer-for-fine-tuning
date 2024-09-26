import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '78616f19-f110-47ac-896d-d1e49fcfee4c', title: 'PATENT_TITLE_3939' },
                { id: 'b589ce29-818e-4e57-bf59-83d9cb25464b', title: 'PATENT_TITLE_3787' },
                { id: '939cd24f-bb24-4e5d-bae9-34351cb4c89f', title: 'PATENT_TITLE_3757' },
                { id: 'b9d266b0-b7aa-4f81-a566-493d5a9b4f64', title: 'PATENT_TITLE_4178' },
                { id: '73aeb847-c190-449d-9004-b94c4e28d3ef', title: 'PATENT_TITLE_4209' },
            ]}
        />
    </Box>
)

export default App