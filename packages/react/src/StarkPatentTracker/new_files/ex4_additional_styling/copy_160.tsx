import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '22d70d75-da49-47b0-b54b-82a00ff8ba8e', title: 'PATENT_TITLE_8659' },
                { id: 'a0ce532c-1d63-410c-97b1-323e7c35bbcf', title: 'PATENT_TITLE_8796' },
                { id: 'fc501ce8-a17e-46f1-a695-64c952628b14', title: 'PATENT_TITLE_6666' },
                { id: 'b5bd88c4-8476-4597-be7d-9efb37ebf2b7', title: 'PATENT_TITLE_7617' },
                { id: 'a23d7427-088d-42bf-a22b-4b09d64f3456', title: 'PATENT_TITLE_3009' },
            ]}
        />
    </Box>
)

export default App