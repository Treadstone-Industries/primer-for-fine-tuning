import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a5c3f301-694e-494a-aceb-7dde057dcdfe', title: 'PATENT_TITLE_3032' },
                { id: 'c497050d-c4eb-4f24-a9ce-21b1a1b075cf', title: 'PATENT_TITLE_3773' },
                { id: '98e3ea24-4860-48e0-a7fe-98d3be495e89', title: 'PATENT_TITLE_6185' },
                { id: '451bd2f1-5820-463e-b01b-4d39a26cd843', title: 'PATENT_TITLE_5669' },
                { id: 'e6d8eb57-adef-403f-a0a2-ee1979b9f8c1', title: 'PATENT_TITLE_2619' },
                { id: '4dfa1cd3-e2d5-4300-aa59-7e0bd63f7407', title: 'PATENT_TITLE_4444' },
            ]}
        />
    </Box>
)

export default App