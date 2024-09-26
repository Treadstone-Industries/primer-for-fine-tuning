import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '59b0e0bb-c110-4126-a65d-80e3abc77ac9', title: 'PATENT_TITLE_8207' },
                { id: 'e978abe0-3148-4715-9f9d-9ccc4599c89f', title: 'PATENT_TITLE_7492' },
                { id: '7828c566-cdeb-47c7-a360-2c1c165bbb6d', title: 'PATENT_TITLE_8669' },
                { id: '19efe4da-e74b-4004-96ac-fcfe9cb3b531', title: 'PATENT_TITLE_5602' },
                { id: '08470f5a-7720-4d3f-88e4-a62cd710962f', title: 'PATENT_TITLE_1833' },
                { id: 'c291b786-94aa-41e1-874b-52d71d2ccc08', title: 'PATENT_TITLE_6443' },
            ]}
        />
    </Box>
)

export default App