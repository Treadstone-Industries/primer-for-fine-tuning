import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '01265855-818a-4c6c-9e52-7651738d44a8', title: 'PATENT_TITLE_9996' },
                { id: '5509ac33-a868-44e1-9604-603f136f156d', title: 'PATENT_TITLE_7122' },
            ]}
        />
    </Box>
)

export default App