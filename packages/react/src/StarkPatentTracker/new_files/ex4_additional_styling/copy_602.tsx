import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8aac36fc-ecee-40ee-a545-d66b2c0cdc99', title: 'PATENT_TITLE_3442' },
                { id: 'aebcd03d-9df3-4346-83df-8835a716f697', title: 'PATENT_TITLE_7651' },
                { id: '4bd59ac4-810f-4a3c-bdb6-1c444efa0061', title: 'PATENT_TITLE_1290' },
                { id: 'cd081ec6-c6ee-4034-8230-a8e0e6a49edb', title: 'PATENT_TITLE_3071' },
                { id: 'd843f10a-13ca-4660-a5d5-76ebbe4f38f3', title: 'PATENT_TITLE_8593' },
                { id: 'd29c2fe7-680d-4fea-96c1-bd24938732f1', title: 'PATENT_TITLE_3834' },
            ]}
        />
    </Box>
)

export default App