import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1835a9df-d316-46cc-a6e7-a2df742e2675', title: 'PATENT_TITLE_1377' },
                { id: '45bdbb59-fb56-47da-85dc-c1f5dc9e2865', title: 'PATENT_TITLE_6151' },
                { id: '86493686-14aa-47f9-9bd9-443c58319d3f', title: 'PATENT_TITLE_9342' },
                { id: 'b4d454d2-1238-4efa-902b-96b394452eab', title: 'PATENT_TITLE_2735' },
                { id: 'ab1165e9-224f-4a88-8b1f-352845345e43', title: 'PATENT_TITLE_7946' },
                { id: '0a9e200b-86b1-45cf-8d90-dfb632f0644f', title: 'PATENT_TITLE_1439' },
                { id: '4c54a66a-857f-4a58-ab15-a9933f823fe5', title: 'PATENT_TITLE_5896' },
                { id: '919410a9-0cb3-4843-8061-282d1d886613', title: 'PATENT_TITLE_5864' },
                { id: '6ca8c52c-ac22-4f49-bb3d-eae455dabdc6', title: 'PATENT_TITLE_5006' },
            ]}
        />
    </Box>
)

export default App