import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'db9dce26-b1a4-46bf-b8fc-82601f4043a0', title: 'PATENT_TITLE_8461' },
                { id: '9d3c41da-944f-4ac6-bc93-4d65ac5283a7', title: 'PATENT_TITLE_3031' },
            ]}
        />
    </Box>
)

export default App