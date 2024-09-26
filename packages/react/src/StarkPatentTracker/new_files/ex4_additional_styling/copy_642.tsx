import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '49639668-c989-4fb2-976a-a68b11fba0be', title: 'PATENT_TITLE_6244' },
                { id: '2144cd00-994f-4b40-9322-811d8d33a80a', title: 'PATENT_TITLE_2095' },
                { id: 'bf67dc9c-28e0-4c02-8968-c2b289678466', title: 'PATENT_TITLE_6126' },
                { id: '5b1057ab-c1a4-4d0f-85e8-ea5e7fd48e49', title: 'PATENT_TITLE_4127' },
                { id: '5d969ff7-1384-44d9-a9f7-af25e989d13e', title: 'PATENT_TITLE_9966' },
                { id: '4eaf9661-ceed-47e0-8f5f-9ae5ada3bad2', title: 'PATENT_TITLE_8539' },
                { id: '9bba88b8-635b-424f-b7a1-157098bbe860', title: 'PATENT_TITLE_7350' },
                { id: '2098ae57-1ad6-4b42-a150-bc7b3644493d', title: 'PATENT_TITLE_4085' },
            ]}
        />
    </Box>
)

export default App