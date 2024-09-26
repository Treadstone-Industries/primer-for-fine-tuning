import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8483e39b-cbe9-440c-871b-3156b0744fa1', title: 'PATENT_TITLE_6022' },
                { id: '9ba7615d-2214-43c2-aac2-8b7b0fc4c485', title: 'PATENT_TITLE_6564' },
                { id: 'a3ea122e-ca92-4968-ab4b-cc01b6f7d282', title: 'PATENT_TITLE_3913' },
                { id: 'c8ae47e7-8ae5-438a-8f0d-597224e71eba', title: 'PATENT_TITLE_7523' },
                { id: '753425b5-5b13-4197-9751-f135c1264697', title: 'PATENT_TITLE_8587' },
                { id: 'd05d57d9-fef1-45bb-998b-ccfaf31a3991', title: 'PATENT_TITLE_2423' },
                { id: '155b13cb-4e47-437f-8d6a-5af7f7c2eb39', title: 'PATENT_TITLE_2912' },
                { id: '1ae6d7e1-4590-4ebe-b585-107d75467f4e', title: 'PATENT_TITLE_9050' },
                { id: '8142fa35-3e1b-493c-99b7-7733d34a97cf', title: 'PATENT_TITLE_2694' },
                { id: 'f741bfee-1ddf-439d-a966-143e3503028c', title: 'PATENT_TITLE_4113' },
            ]}
        />
    </Box>
)

export default App