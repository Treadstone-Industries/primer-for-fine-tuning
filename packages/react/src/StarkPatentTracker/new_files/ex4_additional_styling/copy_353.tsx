import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cd53cef7-72c3-4c64-a2b8-4c70f18786e3', title: 'PATENT_TITLE_2534' },
                { id: 'cc9be857-60b5-4400-bde4-d44d3b6800ae', title: 'PATENT_TITLE_2149' },
                { id: 'bc6dedf3-ff10-4f9b-9332-23df54f0e953', title: 'PATENT_TITLE_3938' },
                { id: '79604d69-85f0-4eb0-bfe4-d70e73e414a4', title: 'PATENT_TITLE_7530' },
            ]}
        />
    </Box>
)

export default App