import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '107bc5fd-5150-43fe-8b16-34d8de4c70da', title: 'PATENT_TITLE_5704' },
                { id: 'ce11caf8-0870-4eff-ad96-f2041fea1ae9', title: 'PATENT_TITLE_3067' },
                { id: '1f4c0c44-26cf-4e2d-a911-5feda85ff187', title: 'PATENT_TITLE_5543' },
                { id: '581a2d85-3cd5-480f-b77c-79fd634f2845', title: 'PATENT_TITLE_7001' },
                { id: 'fe49b2c5-8086-4179-8795-4182cc3cbcf3', title: 'PATENT_TITLE_7375' },
                { id: 'dfaae26e-d539-4dca-954d-eac21cf88e56', title: 'PATENT_TITLE_9794' },
            ]}
        />
    </Box>
)

export default App