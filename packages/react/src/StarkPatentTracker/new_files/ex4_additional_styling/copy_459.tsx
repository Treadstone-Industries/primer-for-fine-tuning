import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '55879336-77b1-498d-a7fa-d058ca70aeb2', title: 'PATENT_TITLE_8078' },
                { id: '9548746b-ad8f-4d5a-a6c5-ce8158c6dd21', title: 'PATENT_TITLE_1951' },
                { id: 'f703d0e9-b323-4206-a353-37dfbd8880cd', title: 'PATENT_TITLE_8006' },
                { id: 'dbf237dc-6298-425e-84c8-21b1be4b6d07', title: 'PATENT_TITLE_7851' },
                { id: 'ff8ee452-c1af-4530-ad89-e8fa5cebd0af', title: 'PATENT_TITLE_9067' },
                { id: '744bb2ed-2222-4ad3-bf60-0e0d066ba482', title: 'PATENT_TITLE_8646' },
                { id: '4343b2a3-8bc2-4c3b-9080-7096cae66e06', title: 'PATENT_TITLE_5891' },
                { id: 'c6220bba-af37-490b-a28b-e8acc6359587', title: 'PATENT_TITLE_1376' },
                { id: '1a6b37d5-6df5-4e09-a0cd-c094e4bd236d', title: 'PATENT_TITLE_7286' },
                { id: '27cf7405-e96d-42d5-aa43-36d66cb96a3a', title: 'PATENT_TITLE_1420' },
            ]}
        />
    </Box>
)

export default App