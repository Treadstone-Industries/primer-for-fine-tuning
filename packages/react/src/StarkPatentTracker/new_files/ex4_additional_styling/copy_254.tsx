import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '19411cfa-9677-414e-b3e1-3454b19594d7', title: 'PATENT_TITLE_5845' },
                { id: 'c6289f92-efc0-4de4-8854-b13dee82bb5c', title: 'PATENT_TITLE_2960' },
                { id: '35eb9658-6536-42a8-afaf-f93baa5af68d', title: 'PATENT_TITLE_2815' },
                { id: 'ce088bfd-3750-49d3-82d4-4dfa95a2a7ca', title: 'PATENT_TITLE_7017' },
                { id: '04574035-8b3b-42fb-84a7-530de99e6a85', title: 'PATENT_TITLE_9118' },
                { id: 'd36a632f-a189-4637-82db-d1a9853472ae', title: 'PATENT_TITLE_1037' },
                { id: '77ee1c40-dbf8-4fdd-8420-83e4cc2e8123', title: 'PATENT_TITLE_1633' },
                { id: '784d9116-ce3a-4fbe-b64d-135e240dcaa1', title: 'PATENT_TITLE_8212' },
                { id: 'a27a05f0-5992-4868-80f4-910d32a3bcf2', title: 'PATENT_TITLE_1002' },
            ]}
        />
    </Box>
)

export default App