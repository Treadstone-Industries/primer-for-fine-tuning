import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6972cc44-541b-4bb1-b1f7-b138edea6848', title: 'PATENT_TITLE_6009' },
                { id: '5aa616ea-7c0b-4dcc-a065-03472a95b2a4', title: 'PATENT_TITLE_9300' },
                { id: '0e02c82f-db44-46e5-829e-047065e1f0d9', title: 'PATENT_TITLE_5088' },
                { id: '4459fff2-bcbc-41b5-bd64-532d3a9e99e8', title: 'PATENT_TITLE_8641' },
                { id: '8e57e75f-556d-459f-825e-30367bbeca4f', title: 'PATENT_TITLE_7886' },
            ]}
        />
    </Box>
)

export default App