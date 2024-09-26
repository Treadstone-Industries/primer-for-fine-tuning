import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e4a79365-d9e4-435c-89cb-06b745e654ee', title: 'PATENT_TITLE_2554' },
                { id: '936a6a07-c05b-40a0-8fec-e46802fcc973', title: 'PATENT_TITLE_8895' },
                { id: 'a6250515-bb7d-4708-86e4-22836e672386', title: 'PATENT_TITLE_1491' },
                { id: '7f1edb71-8db1-4ec7-a69e-660511d620c6', title: 'PATENT_TITLE_4314' },
                { id: '5b002a28-0794-4386-bbd6-c559ad2bdbd5', title: 'PATENT_TITLE_6428' },
                { id: '23a2f65d-0fca-4d73-9c9c-b505e3b43062', title: 'PATENT_TITLE_5858' },
                { id: 'e7c7373f-bec6-4e6c-8294-6b74c7b32526', title: 'PATENT_TITLE_7380' },
            ]}
        />
    </Box>
)

export default App