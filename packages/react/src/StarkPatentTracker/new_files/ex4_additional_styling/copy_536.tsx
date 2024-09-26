import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1b2cd0d0-1f91-4173-b850-9ab4d6245343', title: 'PATENT_TITLE_2840' },
                { id: 'd53d7e1e-7b4b-413d-80ce-738fee4a2812', title: 'PATENT_TITLE_4914' },
                { id: '03dab6e8-0356-428a-b7ec-ac16a602f842', title: 'PATENT_TITLE_3314' },
                { id: 'e08934d4-ad4e-4cdd-ac12-121f463a0494', title: 'PATENT_TITLE_8923' },
                { id: '578661e2-843b-44b0-9d6a-db8252280112', title: 'PATENT_TITLE_3375' },
                { id: '5591148b-d26d-4a80-8020-751193d6b4bc', title: 'PATENT_TITLE_9407' },
                { id: '85486026-1b2d-48a6-bfd7-3eb8899e2ec9', title: 'PATENT_TITLE_9709' },
            ]}
        />
    </Box>
)

export default App