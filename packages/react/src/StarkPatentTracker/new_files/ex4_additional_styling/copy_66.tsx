import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '98355045-6f7a-4be3-8933-61b9410b7794', title: 'PATENT_TITLE_4046' },
                { id: '080df337-ac84-44be-adb6-12925522b28e', title: 'PATENT_TITLE_4838' },
                { id: 'b3b762b7-fcd7-418d-a749-ebc492dd723f', title: 'PATENT_TITLE_1323' },
            ]}
        />
    </Box>
)

export default App