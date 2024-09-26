import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '46bdb088-d992-4685-840f-286251aa9804', title: 'PATENT_TITLE_2247' },
                { id: 'e92e2807-0ef5-4915-87b3-f79daa530977', title: 'PATENT_TITLE_1026' },
                { id: 'e2c570db-68b4-4f76-b630-06b7e77fe294', title: 'PATENT_TITLE_2212' },
                { id: 'b0be7fa4-4938-4791-be5f-cd5ba8a0d81e', title: 'PATENT_TITLE_8412' },
                { id: '641d8c95-edb4-476b-b2f6-4af7b3b87535', title: 'PATENT_TITLE_3631' },
                { id: 'ae5d1e93-f22c-4e07-b60a-d832c5f67b6e', title: 'PATENT_TITLE_3232' },
                { id: 'c7a4c2a8-2f06-475b-a0bb-fe76d1b13128', title: 'PATENT_TITLE_4597' },
            ]}
        />
    </Box>
)

export default App