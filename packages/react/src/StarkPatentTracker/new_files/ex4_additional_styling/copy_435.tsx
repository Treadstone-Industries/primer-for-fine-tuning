import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd48d1c66-6c77-4314-ba10-8e9293c7e819', title: 'PATENT_TITLE_8934' },
                { id: '02262abf-7509-4482-83a4-08d55d7ebb26', title: 'PATENT_TITLE_6295' },
                { id: '9e1aca7f-192c-4424-ba7b-8a903b85cbf4', title: 'PATENT_TITLE_8984' },
                { id: '5e662670-e158-463c-8124-72eae63ad961', title: 'PATENT_TITLE_3793' },
                { id: 'ede8b414-3cae-43d4-ab2f-960a12334c1c', title: 'PATENT_TITLE_6100' },
                { id: 'b2fa1c14-abd7-498e-a933-85976c37bde9', title: 'PATENT_TITLE_7829' },
                { id: '47a10810-1bd2-42fe-86a7-4d28b9e9ccb5', title: 'PATENT_TITLE_4973' },
                { id: '5968ead7-1af3-4ac0-bf0c-6afc6f2295d5', title: 'PATENT_TITLE_6013' },
                { id: '72cbdfa5-8d5f-4720-9451-46f5f341dfb6', title: 'PATENT_TITLE_4189' },
                { id: '289631d0-cfcf-4f7a-8ece-ad1d1ded444d', title: 'PATENT_TITLE_5881' },
            ]}
        />
    </Box>
)

export default App