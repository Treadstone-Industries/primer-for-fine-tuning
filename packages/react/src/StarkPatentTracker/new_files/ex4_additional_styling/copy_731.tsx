import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cec52c9c-06a6-418f-8876-486e0bc10a8a', title: 'PATENT_TITLE_9778' },
                { id: '2ed7f951-0c91-4889-96a0-dc2550a21e0f', title: 'PATENT_TITLE_6752' },
                { id: '05e0e369-1147-4333-8491-468a506adfe1', title: 'PATENT_TITLE_4719' },
                { id: 'f7c2c0a9-d15a-449c-bafc-05ded2b13b14', title: 'PATENT_TITLE_5864' },
                { id: '8dd60a26-5fb7-431b-bfcf-ea526805544f', title: 'PATENT_TITLE_3248' },
                { id: '2d208219-3856-4599-ac46-39a4004d10c6', title: 'PATENT_TITLE_2056' },
                { id: '4c642a66-54e3-4100-8c51-bbe275fcdfed', title: 'PATENT_TITLE_5727' },
                { id: '1a2a5569-5523-4897-af67-c46ab45f520c', title: 'PATENT_TITLE_8749' },
            ]}
        />
    </Box>
)

export default App