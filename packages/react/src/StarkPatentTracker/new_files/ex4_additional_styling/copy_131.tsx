import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8ad9a3fa-ced1-429b-9a1a-e5f1d6171865', title: 'PATENT_TITLE_1872' },
                { id: 'b90d58c1-1f2d-4f5d-a121-588d7afcd10e', title: 'PATENT_TITLE_5515' },
                { id: 'c3b42851-04b5-4468-916d-e3424a169799', title: 'PATENT_TITLE_2249' },
                { id: '3b85acc6-0a7a-49b9-aa14-acc1c973ef08', title: 'PATENT_TITLE_3860' },
            ]}
        />
    </Box>
)

export default App