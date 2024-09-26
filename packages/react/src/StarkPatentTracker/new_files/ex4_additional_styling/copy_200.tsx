import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '92ec46df-bf1d-4b3f-84d9-5b123483fc5d', title: 'PATENT_TITLE_8880' },
                { id: '65ad9f83-bc24-4e2c-b937-268e89597c38', title: 'PATENT_TITLE_2183' },
                { id: 'd2c58fab-cb38-40f1-8392-711439d891c3', title: 'PATENT_TITLE_8095' },
                { id: '49867063-0231-4150-9fc3-1f791c77fb91', title: 'PATENT_TITLE_1024' },
                { id: 'ed0a3ba6-c93e-4a4a-9f81-b6afd4cdd3aa', title: 'PATENT_TITLE_4575' },
                { id: 'a6c4b8bb-550f-481d-880d-1008b2897a90', title: 'PATENT_TITLE_1359' },
                { id: '2bff8b03-f255-4827-83c1-398859bf85cd', title: 'PATENT_TITLE_8270' },
                { id: 'cd192fb2-c07b-4a71-9dbe-4fe3bc4ed667', title: 'PATENT_TITLE_7041' },
            ]}
        />
    </Box>
)

export default App