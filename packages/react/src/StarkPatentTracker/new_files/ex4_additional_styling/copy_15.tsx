import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '07a2a4e4-b9dd-4c4f-8217-98a3ef4d4c08', title: 'PATENT_TITLE_8213' },
                { id: '1e40731c-c2a6-4307-bb50-16ca62455d90', title: 'PATENT_TITLE_9727' },
                { id: 'fda03838-c7d6-4e32-a3dc-94d31302bdc3', title: 'PATENT_TITLE_8288' },
                { id: 'eace69e2-75b7-44fc-9a98-f21345b618e9', title: 'PATENT_TITLE_2345' },
                { id: '7f9f1f82-f8a8-4ee0-8a84-d43ea53a662b', title: 'PATENT_TITLE_3683' },
                { id: 'c5bf1004-17bc-4ea2-9bcd-db73eaf5c2c8', title: 'PATENT_TITLE_9890' },
            ]}
        />
    </Box>
)

export default App