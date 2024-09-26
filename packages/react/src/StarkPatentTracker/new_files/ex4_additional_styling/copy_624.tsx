import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a71e69c1-6b6c-4e7e-8980-99ddc3cfd8a1', title: 'PATENT_TITLE_5953' },
                { id: '3466eb62-eaf4-4c1f-b4ab-a6953fc24716', title: 'PATENT_TITLE_1546' },
            ]}
        />
    </Box>
)

export default App