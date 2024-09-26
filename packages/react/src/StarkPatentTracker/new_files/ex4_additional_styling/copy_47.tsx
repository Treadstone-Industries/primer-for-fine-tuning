import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ea4d6df1-767a-4dcb-9057-aec102cbaea1', title: 'PATENT_TITLE_8709' },
                { id: '47aff78e-1b3d-449c-9794-c8a399577b20', title: 'PATENT_TITLE_7098' },
                { id: '59f829ae-a7a0-49ed-8a22-086aa5f64227', title: 'PATENT_TITLE_4835' },
                { id: 'f046773b-ef57-4d7b-be99-e7285e2e71eb', title: 'PATENT_TITLE_1758' },
                { id: 'f61a401a-c394-4b7f-b24f-6cda8ed8a345', title: 'PATENT_TITLE_7481' },
                { id: '319ca484-cb53-4092-a484-f19139cef1fb', title: 'PATENT_TITLE_7399' },
                { id: '482ceeb1-ddeb-48c6-b95f-5586f94f3f00', title: 'PATENT_TITLE_4727' },
            ]}
        />
    </Box>
)

export default App