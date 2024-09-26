import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'da1f84b6-899b-4ef6-b7af-513339c6e0e7', title: 'PATENT_TITLE_7080' },
                { id: '384c051c-5c31-4938-b24f-fc925df43273', title: 'PATENT_TITLE_1650' },
            ]}
        />
    </Box>
)

export default App