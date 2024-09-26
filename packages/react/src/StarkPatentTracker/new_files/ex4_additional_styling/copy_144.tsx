import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '110e6c36-deea-4ea6-8d62-e19d0c8cc7ac', title: 'PATENT_TITLE_5851' },
                { id: '81ac0fd3-cc31-4ea2-95f6-7b41a6b1df57', title: 'PATENT_TITLE_2407' },
                { id: '7368a419-b8c0-43bd-9cc3-676ceb76c7fd', title: 'PATENT_TITLE_5410' },
                { id: 'c5090903-bfb2-4f6c-9e3a-2ed98d485b70', title: 'PATENT_TITLE_9369' },
                { id: '91508433-9443-475c-945e-1e5bb6f2f7e2', title: 'PATENT_TITLE_1900' },
                { id: '8342c7fc-3db6-49cb-a692-815fb651b889', title: 'PATENT_TITLE_3328' },
                { id: '651116fc-d97a-4d45-b611-673df74b2aa9', title: 'PATENT_TITLE_7497' },
                { id: 'be648ca6-40b9-4722-a37c-320c411e6dd4', title: 'PATENT_TITLE_3783' },
                { id: '9f74a30e-ec76-41f6-97ab-0e3298366b79', title: 'PATENT_TITLE_1137' },
                { id: '62bce01b-2225-4d5b-aac9-f680f6b65965', title: 'PATENT_TITLE_2835' },
            ]}
        />
    </Box>
)

export default App