import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '66062208-3b50-4a43-8497-e34fb368a713', title: 'PATENT_TITLE_4820' },
                { id: '02b5123f-0c8b-4177-9301-bd68c9956fb7', title: 'PATENT_TITLE_2023' },
                { id: '56d6d53a-c976-4a21-955e-6aab2fb392a3', title: 'PATENT_TITLE_9798' },
                { id: 'c30ae3e2-1bfe-4806-b74b-395a0c21845f', title: 'PATENT_TITLE_2593' },
                { id: '607ceda9-051c-42c5-be49-3fb0d2b0af07', title: 'PATENT_TITLE_6721' },
                { id: '6344901d-c387-4889-afba-fab96a9b9170', title: 'PATENT_TITLE_4702' },
                { id: 'faf7c087-b171-4d0d-9d88-95cc8ce17f50', title: 'PATENT_TITLE_7268' },
                { id: 'c68701db-23b7-4003-924e-744b3b581448', title: 'PATENT_TITLE_7776' },
                { id: 'ad79e123-4c35-4cc4-86a3-8dfc38efdde7', title: 'PATENT_TITLE_3433' },
            ]}
        />
    </Box>
)

export default App