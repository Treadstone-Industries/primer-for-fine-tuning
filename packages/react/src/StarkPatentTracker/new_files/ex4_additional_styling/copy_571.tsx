import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '21373f3d-c817-49d0-bd42-0f67dccf04db', title: 'PATENT_TITLE_5855' },
                { id: '3ed7e005-b08e-4ef8-8d75-4067eb2311bd', title: 'PATENT_TITLE_6332' },
                { id: 'f2b608c8-28a2-4def-ae5e-d182f566b82a', title: 'PATENT_TITLE_7188' },
                { id: 'b1b7b335-0cab-41c5-a631-2fbeb36dfcda', title: 'PATENT_TITLE_8665' },
                { id: '5a6812d6-3978-4e34-a896-0581e61b4c79', title: 'PATENT_TITLE_1314' },
                { id: '422b80e1-5ac7-4452-940c-6de38cfa1912', title: 'PATENT_TITLE_2497' },
                { id: '19664d70-b077-4922-a1c6-02dd44d4d6d4', title: 'PATENT_TITLE_5401' },
                { id: '081a8492-1f63-468f-b78f-e0d13b700bae', title: 'PATENT_TITLE_3993' },
                { id: 'e414db0b-268b-4eb6-b9d6-f866d2bd15e4', title: 'PATENT_TITLE_2525' },
            ]}
        />
    </Box>
)

export default App