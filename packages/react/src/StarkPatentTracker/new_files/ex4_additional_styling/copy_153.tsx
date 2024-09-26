import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f0784593-bc83-4d4a-882e-837d6ed99285', title: 'PATENT_TITLE_4043' },
                { id: '2e3ed16b-1677-437c-9b27-b38311ff84d5', title: 'PATENT_TITLE_4277' },
                { id: '098aa21b-fa3f-4da1-8ef8-deff039d754e', title: 'PATENT_TITLE_5951' },
                { id: '7bf2a338-381d-4a4f-a2fb-e52154782615', title: 'PATENT_TITLE_9814' },
                { id: '040fa2db-514c-44b8-a85a-26136d0809a9', title: 'PATENT_TITLE_1381' },
                { id: '17a0577f-0116-43ed-a842-498778b1ba44', title: 'PATENT_TITLE_3446' },
                { id: 'eeb8d6c4-03e9-4a5c-b63b-1070a700e0d6', title: 'PATENT_TITLE_9423' },
                { id: '30001da4-85b3-44d4-8f0a-c192b239b06b', title: 'PATENT_TITLE_6291' },
            ]}
        />
    </Box>
)

export default App