import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd662d2af-a2f0-4acd-9798-e4c3c71c742d', title: 'PATENT_TITLE_7979' },
                { id: 'a40e4871-8521-4a0d-b780-a181904d5d7b', title: 'PATENT_TITLE_7323' },
                { id: 'b8f09982-2878-45eb-9e66-471a320aea61', title: 'PATENT_TITLE_5264' },
                { id: '6aaf75b9-b082-41f6-bbe7-0ec536658c19', title: 'PATENT_TITLE_8497' },
                { id: 'ea880b93-fbab-4171-b3ae-0092103b3850', title: 'PATENT_TITLE_7986' },
            ]}
        />
    </Box>
)

export default App