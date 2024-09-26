import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '74ffdc2d-107e-498d-8616-9c53acf1e1f2', title: 'PATENT_TITLE_4581' },
                { id: '082789d7-a3dc-40c4-b5c4-c14b3904be44', title: 'PATENT_TITLE_8886' },
                { id: '4853c804-6a14-4743-88f3-4a8b9728fccf', title: 'PATENT_TITLE_9301' },
                { id: 'f7e32a6d-28a3-48b5-a2bf-2a35df1eca2f', title: 'PATENT_TITLE_4303' },
                { id: '1645f05d-b7c9-4cbf-a6d0-7692b964dfd1', title: 'PATENT_TITLE_2322' },
                { id: '78ca29c5-8861-4782-8a17-f0d0276f13d9', title: 'PATENT_TITLE_5010' },
                { id: '07801f0f-dd6e-4676-9f0c-30de4590aed7', title: 'PATENT_TITLE_4106' },
            ]}
        />
    </Box>
)

export default App