import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0344c525-6eb7-45d3-bcf3-11efa68041f6', title: 'PATENT_TITLE_2689' },
                { id: '71839fc1-b68f-40e4-9ec4-9dfcb2b7e27d', title: 'PATENT_TITLE_5634' },
                { id: '2c1a1f05-fa67-4975-bb1c-7520f7b36af7', title: 'PATENT_TITLE_2372' },
                { id: '14282ce3-4675-43ae-9217-15ed4997f44d', title: 'PATENT_TITLE_6099' },
                { id: '35b0de72-454d-4e46-8e11-26df0ec69f99', title: 'PATENT_TITLE_4491' },
                { id: '1cce1a15-1728-495f-9abe-ab81c3a11a72', title: 'PATENT_TITLE_4951' },
                { id: '24739e3d-2fe0-466c-9fc0-4e0feaf81f00', title: 'PATENT_TITLE_4364' },
                { id: 'b216c7b8-7ba1-4fc4-87fc-59625ce6f482', title: 'PATENT_TITLE_4316' },
                { id: '13de648e-686a-4d3b-96a6-fabf030ed5f8', title: 'PATENT_TITLE_1886' },
            ]}
        />
    </Box>
)

export default App