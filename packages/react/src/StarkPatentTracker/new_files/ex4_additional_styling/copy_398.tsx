import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bcf5f3e6-a08a-4393-996c-043930940980', title: 'PATENT_TITLE_5085' },
                { id: '47af5231-0893-444e-a8f2-7f3b7764a217', title: 'PATENT_TITLE_9395' },
                { id: 'a5c14de0-2a79-46fb-9842-1afde07d7582', title: 'PATENT_TITLE_6478' },
                { id: '890df893-9e95-49b9-a4aa-99a51c1f6ae9', title: 'PATENT_TITLE_3424' },
                { id: '04742341-eea1-47c4-8af5-6b1213d700c5', title: 'PATENT_TITLE_1155' },
                { id: 'b9f39f6b-3184-480f-8494-821a0e181bd0', title: 'PATENT_TITLE_1489' },
                { id: 'a8f8e56f-82ef-45a7-8a0b-46c130f8ef59', title: 'PATENT_TITLE_1472' },
            ]}
        />
    </Box>
)

export default App