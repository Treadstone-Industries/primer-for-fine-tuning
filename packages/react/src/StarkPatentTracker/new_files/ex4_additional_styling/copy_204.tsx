import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '71b5ba28-7e19-41be-b498-0bdad8373359', title: 'PATENT_TITLE_4876' },
                { id: '10c2c36d-0e3b-4007-aaca-00d69026c507', title: 'PATENT_TITLE_6114' },
                { id: '724b70e9-b952-4600-aea9-500e79bc1612', title: 'PATENT_TITLE_4477' },
                { id: 'a265e95a-a885-471b-bc3f-8108ce9b5836', title: 'PATENT_TITLE_2016' },
                { id: 'cdc570e9-7740-43b5-8986-fa2300d5644f', title: 'PATENT_TITLE_6579' },
                { id: '7f6b478a-d34d-4fa5-9723-5be1a5fb1542', title: 'PATENT_TITLE_8517' },
                { id: 'ce4849cd-4b89-4bcc-acd9-ca970f26c179', title: 'PATENT_TITLE_8351' },
                { id: '074551e6-8caf-4981-b3ba-77cfad14035e', title: 'PATENT_TITLE_5803' },
            ]}
        />
    </Box>
)

export default App