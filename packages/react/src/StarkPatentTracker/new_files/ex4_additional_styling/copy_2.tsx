import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '91d91e67-58b9-48e2-ad07-ee4c54915c7c', title: 'PATENT_TITLE_1573' },
                { id: '206e21e3-c219-4215-9022-91f19f732d3b', title: 'PATENT_TITLE_3505' },
                { id: 'edea529c-5856-4ec0-8ce8-30197b58bc54', title: 'PATENT_TITLE_8966' },
                { id: 'abb086c0-251f-43ee-8ffd-1b3cfd079b63', title: 'PATENT_TITLE_2503' },
            ]}
        />
    </Box>
)

export default App