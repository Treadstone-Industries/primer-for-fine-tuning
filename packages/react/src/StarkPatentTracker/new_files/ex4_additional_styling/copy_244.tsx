import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4716c119-34dc-45ff-8764-1b0b3ea07b6a', title: 'PATENT_TITLE_5573' },
                { id: 'ed752980-3ccc-4b15-87c0-c4fded7c3e03', title: 'PATENT_TITLE_9828' },
                { id: '9ee590ac-6fa6-4b1e-b891-a2142fcbeaef', title: 'PATENT_TITLE_3540' },
                { id: '77ec6301-4d64-417d-91cb-98965535ee94', title: 'PATENT_TITLE_1305' },
                { id: '1bc891fb-1e20-4a6c-8b76-5bfcf5ab3303', title: 'PATENT_TITLE_3237' },
                { id: 'fd2dd6a6-fd62-4e39-8503-c00168adb10e', title: 'PATENT_TITLE_8688' },
            ]}
        />
    </Box>
)

export default App