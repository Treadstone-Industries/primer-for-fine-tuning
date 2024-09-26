import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1e26f6fe-b155-4159-8c9e-c17e6c9c1c6c', title: 'PATENT_TITLE_4811' },
                { id: '98328610-9316-42b9-84b5-e3a87188d9f3', title: 'PATENT_TITLE_7118' },
            ]}
        />
    </Box>
)

export default App