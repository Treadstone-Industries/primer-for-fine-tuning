import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5495a7e7-37ae-4871-b887-228fa96af5f7', title: 'PATENT_TITLE_9942' },
                { id: '11d55471-2d2d-4b27-a653-26b10fbc3554', title: 'PATENT_TITLE_6273' },
                { id: '79823f51-cc64-462f-9085-21e9e6bb55a3', title: 'PATENT_TITLE_4096' },
                { id: '2bede6ed-a5a0-497c-b6c3-be66ff930903', title: 'PATENT_TITLE_7147' },
                { id: '3f6d0272-7423-470d-b464-59143953fd4c', title: 'PATENT_TITLE_1101' },
            ]}
        />
    </Box>
)

export default App