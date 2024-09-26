import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5f9aadab-1bda-47dc-b139-e623bcdcdc48', title: 'PATENT_TITLE_9401' },
                { id: '48d3e653-7896-46d4-8bb9-b97963319cc1', title: 'PATENT_TITLE_7301' },
                { id: 'f50b8876-f96e-4986-a820-5b7ee04f8b9b', title: 'PATENT_TITLE_8332' },
                { id: '107e0e62-a9ee-4c14-a429-c5b34f651cd8', title: 'PATENT_TITLE_7530' },
                { id: '99aa45d9-6786-462e-8fd5-3ef99fa10531', title: 'PATENT_TITLE_1346' },
            ]}
        />
    </Box>
)

export default App