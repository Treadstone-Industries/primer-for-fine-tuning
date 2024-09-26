import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '10daf1a9-67cd-41f1-b888-fa81abb758e0', title: 'PATENT_TITLE_8874' },
                { id: 'fe3ec9d2-7021-4dfa-a79e-e3ce22047fb4', title: 'PATENT_TITLE_2546' },
                { id: 'c4c0ebe4-6cc4-44d3-bf3c-1581db2c9830', title: 'PATENT_TITLE_1261' },
                { id: '85bc1a7f-710b-4a1e-b096-56dfd01e3786', title: 'PATENT_TITLE_6778' },
                { id: '41b4077f-0386-4057-a9ed-dd87380691e4', title: 'PATENT_TITLE_8052' },
                { id: 'c7c1ba94-8cda-4b96-84ad-fad44deb4ced', title: 'PATENT_TITLE_4679' },
                { id: '24bd138f-1553-4fa0-9332-88f8bcb4461b', title: 'PATENT_TITLE_5602' },
                { id: '64e7f7da-b6b2-4a45-b06b-b1fa70673c08', title: 'PATENT_TITLE_6697' },
                { id: '50fb04d3-f032-4d21-810e-234d2946b6d1', title: 'PATENT_TITLE_6611' },
            ]}
        />
    </Box>
)

export default App