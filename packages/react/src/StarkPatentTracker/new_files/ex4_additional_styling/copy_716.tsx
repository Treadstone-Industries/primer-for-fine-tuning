import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2f67a200-1b65-44c4-93ee-932813cf7f9c', title: 'PATENT_TITLE_5834' },
                { id: '82efc908-edf6-485c-acec-5644b0211417', title: 'PATENT_TITLE_4215' },
                { id: '7dbe88f5-8426-44b7-bc2d-47d1c5e51926', title: 'PATENT_TITLE_8936' },
                { id: '019e6a10-f0ca-4c4c-9dd1-3ce89eb2c610', title: 'PATENT_TITLE_5101' },
                { id: '99d0f177-37ae-4c6a-bc46-82334f2c4d2a', title: 'PATENT_TITLE_4190' },
                { id: '383aeab5-2618-4d77-b75d-fdd93cd97a25', title: 'PATENT_TITLE_6739' },
                { id: '64c08911-56a8-4a03-8080-b5c02d175416', title: 'PATENT_TITLE_6646' },
            ]}
        />
    </Box>
)

export default App