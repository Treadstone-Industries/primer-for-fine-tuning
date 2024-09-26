import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7092395f-d798-4422-8d75-546b14df4a94', title: 'PATENT_TITLE_4546' },
                { id: 'c8e94d78-efbc-4b16-8fc5-4a879cb39c10', title: 'PATENT_TITLE_3069' },
                { id: 'f51eb96d-c058-435d-a12b-f09f75586cda', title: 'PATENT_TITLE_5474' },
                { id: '6246c8b7-ab44-4a4c-a868-96b99b4433a8', title: 'PATENT_TITLE_6241' },
                { id: '634fe681-6d70-443a-97cb-f976349b713d', title: 'PATENT_TITLE_8712' },
                { id: 'b33c09db-7ae5-49fb-b613-6f6b385ed64a', title: 'PATENT_TITLE_2903' },
                { id: '3b5a9379-9c77-4b6a-93db-e3db5584fe65', title: 'PATENT_TITLE_7515' },
            ]}
        />
    </Box>
)

export default App