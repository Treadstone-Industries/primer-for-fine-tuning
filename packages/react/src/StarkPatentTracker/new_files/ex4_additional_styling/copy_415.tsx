import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '383ba95a-3e61-4438-bed7-ed321d93e8d9', title: 'PATENT_TITLE_8033' },
                { id: '28ae1a22-7d88-4f19-a45f-d59800b47140', title: 'PATENT_TITLE_1055' },
                { id: '0657e5e9-0718-46fa-be2e-2b1385f81e09', title: 'PATENT_TITLE_8208' },
                { id: 'ab56f6fc-cee8-4746-81e9-c3f536fc03e3', title: 'PATENT_TITLE_1210' },
            ]}
        />
    </Box>
)

export default App