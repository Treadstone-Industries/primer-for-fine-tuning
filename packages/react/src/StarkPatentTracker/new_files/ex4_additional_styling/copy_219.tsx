import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a16038db-fc45-4516-a79f-28eb86a0fec3', title: 'PATENT_TITLE_9890' },
                { id: 'df4227c1-9636-41f4-8832-dcbdbdb11d5c', title: 'PATENT_TITLE_1615' },
                { id: '1461cdde-5fe7-470c-9757-a630b987c530', title: 'PATENT_TITLE_3785' },
                { id: '239cf64b-92dc-42cc-b5ec-0c8f1230c317', title: 'PATENT_TITLE_1990' },
                { id: '2f93478a-8e53-40ef-9aee-5221b51f173c', title: 'PATENT_TITLE_1905' },
                { id: '3cd8e464-7a5c-4d7c-9386-d8f0e8ab86f1', title: 'PATENT_TITLE_7019' },
                { id: 'ae2c2330-8e33-4a32-8810-5392c2c99b3e', title: 'PATENT_TITLE_3223' },
            ]}
        />
    </Box>
)

export default App