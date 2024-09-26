import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ad3ba6d8-f753-44ae-8562-e77296bdc872', title: 'PATENT_TITLE_4919' },
                { id: 'fb18b023-d522-4d5a-9f6c-3ec8a6f02aa6', title: 'PATENT_TITLE_7208' },
                { id: '0fe7ad02-d40d-470e-a8be-f43e804a3868', title: 'PATENT_TITLE_1119' },
            ]}
        />
    </Box>
)

export default App