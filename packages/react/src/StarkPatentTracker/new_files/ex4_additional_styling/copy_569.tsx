import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5562eacf-5552-4299-83c6-4ff35daf9a7b', title: 'PATENT_TITLE_4872' },
                { id: '7b450bb8-53eb-4009-bb40-5ba4454ac836', title: 'PATENT_TITLE_5203' },
                { id: '34fdebb9-92cf-4a5f-a59f-61d12ee5a1fe', title: 'PATENT_TITLE_2144' },
            ]}
        />
    </Box>
)

export default App