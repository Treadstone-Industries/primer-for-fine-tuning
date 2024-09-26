import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '303978c0-3664-4f98-9363-5f156bdceca6', title: 'PATENT_TITLE_2608' },
                { id: '64bfc2f9-3e33-4a41-974e-8571b13eaa76', title: 'PATENT_TITLE_4380' },
                { id: '9b525d03-a6dc-4c5c-b60b-8945766d206c', title: 'PATENT_TITLE_2323' },
            ]}
        />
    </Box>
)

export default App