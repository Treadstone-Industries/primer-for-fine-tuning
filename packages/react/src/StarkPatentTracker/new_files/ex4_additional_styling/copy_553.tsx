import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '31e7e089-1fd0-4622-813a-ebe7f4b084ae', title: 'PATENT_TITLE_1349' },
                { id: '0499e8b0-b11b-424b-9ebd-95de6f310daf', title: 'PATENT_TITLE_1842' },
                { id: '726d2a85-0789-4a37-b27d-5e63a2d40866', title: 'PATENT_TITLE_2395' },
                { id: '77489538-045e-409c-a5e1-6032e78755f9', title: 'PATENT_TITLE_3495' },
                { id: '6fc243eb-6def-4b8f-b672-37dea3b5f08d', title: 'PATENT_TITLE_9866' },
            ]}
        />
    </Box>
)

export default App