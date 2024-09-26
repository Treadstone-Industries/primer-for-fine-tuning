import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b75092db-b538-4033-aa01-cfc5510c9f0b', title: 'PATENT_TITLE_6725' },
                { id: 'c7c3120d-839c-4792-bcd5-bf1b46b988e7', title: 'PATENT_TITLE_2157' },
                { id: '842d0efd-65c9-4f58-a521-dce1e94ef423', title: 'PATENT_TITLE_2777' },
                { id: '59750bc7-615b-4aa3-8f68-0562a8b441b2', title: 'PATENT_TITLE_3879' },
                { id: '50866830-bb12-4f23-b08d-dddf54dd4da3', title: 'PATENT_TITLE_6995' },
                { id: '17fc26ef-6259-471a-8eb1-85d10b84cfc5', title: 'PATENT_TITLE_2099' },
                { id: '2d3842b6-d93f-4d20-87fa-f737fcf4a77e', title: 'PATENT_TITLE_3253' },
                { id: '577d3e39-956a-46f5-b619-9e314394e0a5', title: 'PATENT_TITLE_8623' },
                { id: 'af521d38-93b7-46c8-b512-88604c9a96ec', title: 'PATENT_TITLE_9842' },
                { id: '2050b53b-2b63-4e2d-99a1-cd87f221a95a', title: 'PATENT_TITLE_8297' },
            ]}
        />
    </Box>
)

export default App