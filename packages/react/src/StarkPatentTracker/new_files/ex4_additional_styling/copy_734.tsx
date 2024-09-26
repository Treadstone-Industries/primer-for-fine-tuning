import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'beee9570-9c7b-4726-b3b9-56cfa05e22fb', title: 'PATENT_TITLE_6340' },
                { id: '841879cf-b318-47a5-aa26-41b332ce8d90', title: 'PATENT_TITLE_9850' },
                { id: '4e416973-1999-4c43-a1be-6c70a24abdce', title: 'PATENT_TITLE_5906' },
                { id: 'fac69efa-a7f4-4713-b4c8-888e92f54030', title: 'PATENT_TITLE_9094' },
                { id: '26771f6d-8e9d-4222-9b21-37d248f924c5', title: 'PATENT_TITLE_9920' },
                { id: '8f74436f-1007-4404-9d80-a8bf14912408', title: 'PATENT_TITLE_9469' },
            ]}
        />
    </Box>
)

export default App