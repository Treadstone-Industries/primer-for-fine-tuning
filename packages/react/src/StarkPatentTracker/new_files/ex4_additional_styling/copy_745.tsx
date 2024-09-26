import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9d8dd6f7-4980-4ef1-a613-344e2719ddbf', title: 'PATENT_TITLE_3227' },
                { id: 'bc953f88-5ac2-44b6-9673-277a1d16f5f3', title: 'PATENT_TITLE_4978' },
                { id: '0bd72932-bad7-4fc0-a139-aa073690d5f9', title: 'PATENT_TITLE_4523' },
                { id: '3df4ea46-17de-45ca-a973-4854d2c1027d', title: 'PATENT_TITLE_6022' },
                { id: 'c211a1cf-61a2-43b1-95fc-d932c087314c', title: 'PATENT_TITLE_6124' },
                { id: '8ce8839e-64ce-4ea3-8428-7869520e4688', title: 'PATENT_TITLE_4037' },
            ]}
        />
    </Box>
)

export default App