import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a3da31fd-fdb6-41fa-aad4-16210e927320', title: 'PATENT_TITLE_9120' },
                { id: '8785e27f-5b33-4d70-b1eb-3888bdfe73f1', title: 'PATENT_TITLE_9400' },
            ]}
        />
    </Box>
)

export default App