import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e47b93ee-5d72-4032-baf0-fa9394fb9414', title: 'PATENT_TITLE_6778' },
                { id: '8fada6f7-9a00-4897-9c76-28ac193e09fb', title: 'PATENT_TITLE_6663' },
                { id: '329c13ab-e5f2-493a-89bf-df413e587948', title: 'PATENT_TITLE_3802' },
                { id: 'af88022c-25fe-43de-b4b6-c5c8052d77e6', title: 'PATENT_TITLE_6901' },
                { id: 'f2b883a3-7833-4898-84dc-a65b2b1c6ff4', title: 'PATENT_TITLE_4285' },
            ]}
        />
    </Box>
)

export default App