import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4cc2aed5-5e3e-4c23-b33f-7753bfe95e33', title: 'PATENT_TITLE_5416' },
                { id: 'c3f467ae-bbea-4c66-9720-fab22cd97bd9', title: 'PATENT_TITLE_3539' },
            ]}
        />
    </Box>
)

export default App