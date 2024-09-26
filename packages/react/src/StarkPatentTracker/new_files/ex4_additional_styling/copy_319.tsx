import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5ca4cbb2-9756-4118-b2f3-46e183aae6f9', title: 'PATENT_TITLE_3516' },
                { id: 'b54641ad-fa1a-458b-b7f8-6371bf4cf7b8', title: 'PATENT_TITLE_3133' },
                { id: 'c1195eeb-0093-46a5-a6ae-d4f37bba300d', title: 'PATENT_TITLE_4036' },
                { id: '505383ee-62b9-4715-80c3-ac0aea572fe7', title: 'PATENT_TITLE_2562' },
                { id: '98a00129-109a-4bc3-a87f-61d0bdda6bad', title: 'PATENT_TITLE_3175' },
            ]}
        />
    </Box>
)

export default App