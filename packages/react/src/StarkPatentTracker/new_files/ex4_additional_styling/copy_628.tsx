import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3a3e656f-eaf8-4b0a-8876-30113d6238d0', title: 'PATENT_TITLE_7647' },
                { id: '18a73195-c741-447d-b2d5-08685ed89447', title: 'PATENT_TITLE_2278' },
                { id: '73bc7455-8223-444a-aa0c-8940ea2b0af5', title: 'PATENT_TITLE_4237' },
                { id: '8d6bc80f-bff5-4274-a8b9-6942435d861c', title: 'PATENT_TITLE_4540' },
                { id: 'da274410-a8d6-4914-891a-6c34ccd2785b', title: 'PATENT_TITLE_5685' },
                { id: 'c30eb88e-f3e1-4904-b833-2ae0ec1714d5', title: 'PATENT_TITLE_8632' },
                { id: 'f906b8c2-f1ce-4eca-9905-a9b3d12762e3', title: 'PATENT_TITLE_8186' },
                { id: 'd1ae308a-de61-4b01-8e48-88d118dd57db', title: 'PATENT_TITLE_2717' },
                { id: 'c56d4dab-b554-4d9e-90f2-ddc823aedce2', title: 'PATENT_TITLE_5079' },
                { id: 'f2a73fda-315d-44c7-b545-3506ca44fd41', title: 'PATENT_TITLE_1499' },
            ]}
        />
    </Box>
)

export default App