import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '81b82945-1b29-49f9-81d1-6f6a0743f401', title: 'PATENT_TITLE_8075' },
                { id: '949f64dd-75de-4f13-a589-107a850b1e51', title: 'PATENT_TITLE_9697' },
                { id: 'b91d6d8a-f557-4961-abc4-34fa78699f59', title: 'PATENT_TITLE_8186' },
                { id: 'a3b97833-8ad3-48c7-8c04-6799dedbfd41', title: 'PATENT_TITLE_9222' },
                { id: '5f02893e-5c49-41ed-98e7-97030681126a', title: 'PATENT_TITLE_8934' },
                { id: 'c49a650f-672c-452a-8d23-44caf599fb6b', title: 'PATENT_TITLE_4700' },
                { id: 'b5a5e8d7-9710-4151-9eb8-b0d4f13ee2af', title: 'PATENT_TITLE_8275' },
                { id: 'd9d44492-494b-43ad-9ee9-c1c113faffed', title: 'PATENT_TITLE_5033' },
                { id: 'dd0a5332-1775-499c-8d53-24391ee7589c', title: 'PATENT_TITLE_4197' },
                { id: 'd959c44c-74e7-4e6b-9c61-ea03c017c479', title: 'PATENT_TITLE_8502' },
            ]}
        />
    </Box>
)

export default App