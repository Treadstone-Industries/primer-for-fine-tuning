import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '190c7a0b-0a9f-4771-b5ab-88b8b92c5004', title: 'PATENT_TITLE_7811' },
                { id: '6f09834a-d80d-4bbd-8fd5-8a4eab3eb606', title: 'PATENT_TITLE_2613' },
                { id: '375836ff-0400-44ba-91fa-9ae2f5261969', title: 'PATENT_TITLE_4701' },
                { id: 'c7ace90d-a76c-4eeb-8d6f-cea0e3a60deb', title: 'PATENT_TITLE_9289' },
                { id: '6b7e9e89-fc69-4149-b4a9-b3ff2d4cc0fc', title: 'PATENT_TITLE_4523' },
                { id: '99777ef7-36ed-4241-bd7d-2e762d5cd0e9', title: 'PATENT_TITLE_2284' },
                { id: '941daddd-f90c-491f-82c9-3dfde1b9b5c9', title: 'PATENT_TITLE_1689' },
                { id: 'a382302f-73cc-4ae8-972e-84ca2e74fc79', title: 'PATENT_TITLE_2931' },
                { id: 'a5d97582-4057-4ae7-99f1-5a3ad44b15a3', title: 'PATENT_TITLE_3973' },
                { id: '57db1a2a-1310-4ee3-bbfc-8ddb7d9c75d7', title: 'PATENT_TITLE_5895' },
            ]}
        />
    </Box>
)

export default App