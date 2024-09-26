import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '52fba5aa-150d-4ae8-b421-f8995d5723d4', title: 'PATENT_TITLE_6288' },
                { id: '8acec756-c108-4642-bd4e-6ac87b69ed38', title: 'PATENT_TITLE_2126' },
            ]}
        />
    </Box>
)

export default App