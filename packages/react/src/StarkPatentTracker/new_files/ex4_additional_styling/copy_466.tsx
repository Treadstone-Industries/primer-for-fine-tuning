import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '55b062cc-99c3-41ea-a05e-816c6eb783aa', title: 'PATENT_TITLE_7690' },
                { id: '12b071e6-2753-4bb9-9d2d-5be3c0fb4b95', title: 'PATENT_TITLE_3952' },
                { id: '04ce3e83-035f-4cf6-b379-03aba0eddc56', title: 'PATENT_TITLE_6902' },
                { id: 'd69ed230-30f4-472e-95c5-10a7c657a0da', title: 'PATENT_TITLE_9481' },
                { id: 'bc7f296f-7d47-4aba-83b9-091e9c3aeae2', title: 'PATENT_TITLE_4350' },
                { id: 'b97c17cc-d691-4558-80e1-c203e17a2222', title: 'PATENT_TITLE_5408' },
                { id: '8b715fee-9701-4a95-af29-e94c25b4add2', title: 'PATENT_TITLE_8289' },
                { id: '2288df29-fbf5-4bf8-b8a6-5b3b1a3a1477', title: 'PATENT_TITLE_6085' },
            ]}
        />
    </Box>
)

export default App