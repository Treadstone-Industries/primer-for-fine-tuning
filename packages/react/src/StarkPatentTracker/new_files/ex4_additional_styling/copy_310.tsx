import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3de51dde-4ec7-40e2-978f-336709a49a92', title: 'PATENT_TITLE_8572' },
                { id: '27759da8-b27e-44a6-9714-8a9ecd75b49a', title: 'PATENT_TITLE_1258' },
                { id: '96ba21be-2af8-4da3-b7df-d2ee0473a269', title: 'PATENT_TITLE_8386' },
                { id: 'b88aa722-bf51-4ea8-adf2-15fe551e39e3', title: 'PATENT_TITLE_5937' },
                { id: '91a4d300-ba70-41f6-9e01-8756f78ad64b', title: 'PATENT_TITLE_8566' },
                { id: '4ecb7e6e-7a6c-44e8-b529-fe336d4a9a71', title: 'PATENT_TITLE_7371' },
                { id: '9d6aca84-c690-46db-bece-c83ea31522c0', title: 'PATENT_TITLE_3788' },
            ]}
        />
    </Box>
)

export default App