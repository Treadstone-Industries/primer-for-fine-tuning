import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '74870377-399f-4233-9617-fa72af3343ff', title: 'PATENT_TITLE_6704' },
                { id: '009f4008-e119-4114-b95f-9e3fdbe2b056', title: 'PATENT_TITLE_9947' },
                { id: 'd476e5a6-1023-496b-a162-357479f6eaa1', title: 'PATENT_TITLE_9938' },
                { id: 'b2b39095-143b-4567-9e7f-d3116428e3bb', title: 'PATENT_TITLE_6253' },
                { id: '35789056-bea2-43a3-945f-443317464de1', title: 'PATENT_TITLE_3284' },
                { id: '222f3de3-2501-46bf-9851-3a5ccd16d5d1', title: 'PATENT_TITLE_8504' },
                { id: 'fe3ed3ca-0061-4a2c-b949-1cb3f4726310', title: 'PATENT_TITLE_2544' },
                { id: '973bf435-c6d0-4cb2-9cb8-c9861b6ca9e9', title: 'PATENT_TITLE_2178' },
                { id: '75aff538-8b29-4514-81cf-1d2d2b15c420', title: 'PATENT_TITLE_7114' },
                { id: 'c1906947-af18-4e8d-903e-9471ec6904af', title: 'PATENT_TITLE_7138' },
            ]}
        />
    </Box>
)

export default App