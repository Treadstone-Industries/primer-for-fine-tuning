import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1303247d-a99c-45fa-9a94-01d0b9dff582', title: 'PATENT_TITLE_1249' },
                { id: '4461daa6-b084-47ba-b348-0e6a7adb1403', title: 'PATENT_TITLE_4296' },
                { id: 'bf213ca4-3697-404e-b6f9-56b5310615c5', title: 'PATENT_TITLE_5345' },
            ]}
        />
    </Box>
)

export default App