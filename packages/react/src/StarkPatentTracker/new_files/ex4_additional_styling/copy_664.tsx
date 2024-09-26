import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '92ecc312-c008-46ef-a32a-ea77822334c2', title: 'PATENT_TITLE_4435' },
                { id: '2da15fa9-2420-4153-b380-32556e25b44b', title: 'PATENT_TITLE_5756' },
                { id: 'ba8c4710-77e4-4d4c-a7f8-95931efd9143', title: 'PATENT_TITLE_4511' },
                { id: '8b1eccd0-890b-495c-8970-96e8055a585d', title: 'PATENT_TITLE_6455' },
                { id: 'fdb43851-69a0-4285-9862-871ac7ef0174', title: 'PATENT_TITLE_2423' },
                { id: '37ee236b-9ac6-4ac6-8bbd-66ed1bbf585c', title: 'PATENT_TITLE_9176' },
                { id: '4c6892c2-a2df-471f-be2e-d78e1e00e0cc', title: 'PATENT_TITLE_7599' },
                { id: '5adf6924-928b-4b34-8197-acbb5395beae', title: 'PATENT_TITLE_5040' },
                { id: '2275b35a-0c34-44f2-b499-707f871e66c7', title: 'PATENT_TITLE_7808' },
            ]}
        />
    </Box>
)

export default App