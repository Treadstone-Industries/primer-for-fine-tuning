import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e3d259e4-ef4c-41b6-a55a-1f66b95da48b', title: 'PATENT_TITLE_4799' },
                { id: '527101d5-d96b-4863-93e6-559438090bdb', title: 'PATENT_TITLE_1846' },
                { id: '90165281-e10e-4f9c-a7c0-162a83921b7e', title: 'PATENT_TITLE_9021' },
                { id: 'b2fbfecd-068b-4ba0-a190-f4fc62d81625', title: 'PATENT_TITLE_7370' },
                { id: '95ae08a6-c93c-4a8b-bc5a-1eb401b4608c', title: 'PATENT_TITLE_8781' },
                { id: 'f83fc1e9-f8db-4aa5-a384-9dea4f05972d', title: 'PATENT_TITLE_5201' },
                { id: 'fc26cf56-a0b2-448b-bc7a-dfdf41894766', title: 'PATENT_TITLE_4253' },
                { id: 'a607a312-1eb0-4827-8301-88801afb6b51', title: 'PATENT_TITLE_7306' },
                { id: 'cf2067bd-6bde-4417-be06-184c7b1936c7', title: 'PATENT_TITLE_9516' },
                { id: 'ec4c7eeb-42c6-48c3-b448-2c47dafc2a26', title: 'PATENT_TITLE_2159' },
            ]}
        />
    </Box>
)

export default App