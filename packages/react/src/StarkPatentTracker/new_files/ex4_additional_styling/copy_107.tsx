import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6577e531-761f-4a62-8af9-2af331e253af', title: 'PATENT_TITLE_3669' },
                { id: '35311de3-a47e-4336-9815-6b7d21a5ab32', title: 'PATENT_TITLE_4716' },
                { id: 'e47c0bc2-4da2-4cda-83f4-effbbb01fdeb', title: 'PATENT_TITLE_1134' },
                { id: 'ae77d8d2-f682-4368-ac9e-30ce15c79e3f', title: 'PATENT_TITLE_7758' },
            ]}
        />
    </Box>
)

export default App