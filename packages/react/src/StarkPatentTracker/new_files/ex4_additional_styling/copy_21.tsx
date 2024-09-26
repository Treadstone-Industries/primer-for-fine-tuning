import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '67852c63-68b4-4cfb-99cb-58bec52f7a7e', title: 'PATENT_TITLE_5602' },
                { id: '1e0e870d-442f-4596-b649-b294d5dd0c72', title: 'PATENT_TITLE_1357' },
                { id: 'a4eabfbb-284a-421e-b921-160f2d405170', title: 'PATENT_TITLE_1510' },
                { id: '0cd274f9-da19-4d27-932d-b3240301ac83', title: 'PATENT_TITLE_3588' },
                { id: 'c09d9594-44bc-4509-9fe4-282e2c79ca27', title: 'PATENT_TITLE_6769' },
                { id: '785b2f5a-5ed3-42c2-b1c7-a23ff01641df', title: 'PATENT_TITLE_8804' },
            ]}
        />
    </Box>
)

export default App