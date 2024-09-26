import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b3858b63-c052-49ad-932b-a7f5ac386f22', title: 'PATENT_TITLE_8741' },
                { id: '902dc334-994e-4942-ac59-a42c62bc827a', title: 'PATENT_TITLE_3799' },
                { id: 'c6a8fde8-525c-403c-8f4a-742c9ee7dc21', title: 'PATENT_TITLE_9860' },
                { id: 'c9e00ba4-0109-4b85-b1ed-f0726019990a', title: 'PATENT_TITLE_1271' },
                { id: '6e59ae1e-fa34-49d0-b090-da569298db3e', title: 'PATENT_TITLE_2013' },
                { id: '9260aab3-547d-4951-9a6e-69f192457557', title: 'PATENT_TITLE_7998' },
            ]}
        />
    </Box>
)

export default App