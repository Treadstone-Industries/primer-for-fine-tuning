import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2eb2a6af-9b8e-4681-b67d-9f168b8f6645', title: 'PATENT_TITLE_4261' },
                { id: 'f7be9ae7-96c3-4f9f-b32e-51ff0ee880b3', title: 'PATENT_TITLE_1337' },
                { id: 'b12c129e-7753-451d-a6f9-8ee18dbee222', title: 'PATENT_TITLE_5434' },
                { id: 'c38a594a-ad55-40f5-9c5e-284474a3b1d2', title: 'PATENT_TITLE_8481' },
                { id: 'd587c757-3674-4a22-a697-19ed459d634a', title: 'PATENT_TITLE_1405' },
            ]}
        />
    </Box>
)

export default App