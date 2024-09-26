import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '318bd579-a1fa-4d0d-aa17-274ad44b8ff5', title: 'PATENT_TITLE_6257' },
                { id: 'cc75796f-0016-4698-81bf-27a01fc348b7', title: 'PATENT_TITLE_8346' },
                { id: '8ff1b2cf-d584-486b-9197-3ae7488e4e6e', title: 'PATENT_TITLE_6863' },
                { id: '87bd1571-742a-4eb3-bc81-1e3208ec70fa', title: 'PATENT_TITLE_7172' },
                { id: '80ef79b6-0f4b-4adb-a08e-93955239a89e', title: 'PATENT_TITLE_3626' },
                { id: '1ad40a7f-fcba-4b4d-ab78-cf3d86b32837', title: 'PATENT_TITLE_5404' },
                { id: '6d4fa43b-3edb-4e04-b68c-56b402243a90', title: 'PATENT_TITLE_9060' },
                { id: '717b4871-ca7b-4c54-a9ba-0284ed00c105', title: 'PATENT_TITLE_5401' },
                { id: '67f5186b-449c-4e8b-9b19-1c4160f30232', title: 'PATENT_TITLE_8918' },
                { id: '517f023f-f526-4a05-97b7-e792b22ba9a5', title: 'PATENT_TITLE_5723' },
            ]}
        />
    </Box>
)

export default App