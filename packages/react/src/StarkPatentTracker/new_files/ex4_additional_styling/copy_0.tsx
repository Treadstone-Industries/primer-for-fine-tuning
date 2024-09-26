import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e7e1a112-909b-4681-9181-fab6b66efabc', title: 'PATENT_TITLE_4417' },
                { id: '5c5904fc-9289-4298-b056-59f3e08f9419', title: 'PATENT_TITLE_9814' },
                { id: 'bf62af49-053e-494a-8dc8-4e891a97d54c', title: 'PATENT_TITLE_8652' },
                { id: 'bc092d8d-2438-428b-aeb8-63e30d8e7ac6', title: 'PATENT_TITLE_1321' },
                { id: '25f8ac55-a11b-4437-a305-0b7564af239b', title: 'PATENT_TITLE_1714' },
                { id: 'fafedede-9b09-44df-937c-cd9083ab403f', title: 'PATENT_TITLE_6422' },
                { id: '6717d03d-f4ad-437f-ab57-b7b070bd3746', title: 'PATENT_TITLE_3410' },
                { id: '0eaf8153-be3b-4ff4-b1e7-2cb0b6a1da77', title: 'PATENT_TITLE_4347' },
            ]}
        />
    </Box>
)

export default App