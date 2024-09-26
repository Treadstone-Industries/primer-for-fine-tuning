import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '266b9b56-2e34-4e6a-a30c-862908affb9f', title: 'PATENT_TITLE_3017' },
                { id: '42aa614b-a760-40c1-b760-46216680962a', title: 'PATENT_TITLE_2064' },
                { id: '7bb6d492-32dc-4b23-83e5-906cd33e7406', title: 'PATENT_TITLE_6589' },
                { id: '19d68315-02b4-43c7-945b-560700837993', title: 'PATENT_TITLE_2879' },
                { id: '0eab0fde-dadf-4467-87ac-2c4fe8fe2fc7', title: 'PATENT_TITLE_5788' },
                { id: 'a79e6264-067f-4c4b-b25f-f3dd81fbc6b7', title: 'PATENT_TITLE_3023' },
                { id: '36c8b507-7947-4292-adac-ab26ed857cc8', title: 'PATENT_TITLE_9900' },
                { id: '2ee1c4a5-1dda-4ad8-80cf-81249cf6e9b0', title: 'PATENT_TITLE_2885' },
            ]}
        />
    </Box>
)

export default App