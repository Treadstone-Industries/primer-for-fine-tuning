import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '20b3ad12-17a8-42dd-9c7c-35da8de31167', title: 'PATENT_TITLE_9890' },
                { id: '187cb3f1-d577-4898-a5b3-f12639aede9a', title: 'PATENT_TITLE_7443' },
                { id: '63b91721-2114-41f8-b79b-8cea34f945ec', title: 'PATENT_TITLE_1122' },
                { id: 'db26c5d9-aa63-4684-a538-bc9bad4630a8', title: 'PATENT_TITLE_7563' },
                { id: '8dbd6ea4-9991-48db-8e6b-70d9deb58001', title: 'PATENT_TITLE_4491' },
                { id: '04b20520-37d1-4149-929f-178b64a72872', title: 'PATENT_TITLE_9198' },
                { id: '6c319f57-a865-4b7a-a4df-9c895ad89571', title: 'PATENT_TITLE_4193' },
                { id: 'd232b76b-78dd-4831-8093-f994f2f97a54', title: 'PATENT_TITLE_5747' },
                { id: '8495e083-d09b-4d29-aba2-1a4acb16cda9', title: 'PATENT_TITLE_9557' },
            ]}
        />
    </Box>
)

export default App