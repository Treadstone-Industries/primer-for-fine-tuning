import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '51a71b4c-6052-4287-9989-b3e16691a938', title: 'PATENT_TITLE_4354' },
                { id: 'cdce7467-3af0-4f75-9d89-188b88b7112b', title: 'PATENT_TITLE_5047' },
                { id: '0d5a5fd8-0a49-47b6-ab29-66d7c63bdee5', title: 'PATENT_TITLE_6915' },
                { id: 'd71b0d8c-3d10-4024-9626-aad219548d7a', title: 'PATENT_TITLE_1401' },
                { id: '83fa8f40-d952-4df2-b365-119860582db0', title: 'PATENT_TITLE_8307' },
                { id: '12b665d0-25c9-47c8-93b9-43e397df2c50', title: 'PATENT_TITLE_7029' },
                { id: '2adfe480-d0cd-47b5-a743-9b20e67c59fc', title: 'PATENT_TITLE_4763' },
            ]}
        />
    </Box>
)

export default App