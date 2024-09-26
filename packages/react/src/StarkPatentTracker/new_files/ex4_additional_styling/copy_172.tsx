import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4a97afc4-efdd-4cae-94da-18fc4a33301b', title: 'PATENT_TITLE_6604' },
                { id: 'a1ac1d2c-4360-4600-8fbf-b312952e788e', title: 'PATENT_TITLE_1018' },
                { id: 'e434f181-c6ab-4bc1-a413-665f48789c9c', title: 'PATENT_TITLE_6398' },
                { id: '7167e748-7ada-4ce2-84a5-c91c331dde35', title: 'PATENT_TITLE_6182' },
            ]}
        />
    </Box>
)

export default App