import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '56f39782-567b-47b0-89ec-0a844bd2a9f9', title: 'PATENT_TITLE_3127' },
                { id: '60066968-f614-44ae-8fcb-2a258788a6c6', title: 'PATENT_TITLE_6123' },
                { id: 'c75ca0a4-56dd-4e2f-8a71-09409bea2be0', title: 'PATENT_TITLE_9354' },
                { id: 'd47cb5fa-4f85-42e9-af92-cc2a48c02f5a', title: 'PATENT_TITLE_9106' },
                { id: '35280a92-0333-4ae7-ad74-c7405d4f16c6', title: 'PATENT_TITLE_3655' },
                { id: '818bc9f6-fd0a-4606-b114-19cf3dfd97b7', title: 'PATENT_TITLE_4127' },
                { id: '7d5af705-1a61-4d5d-879f-d05db2470160', title: 'PATENT_TITLE_1462' },
                { id: 'e20c36b9-57f5-4b38-8e3d-4d87913e8eb9', title: 'PATENT_TITLE_4103' },
                { id: '37585fdb-a8c8-4b53-bf0b-e612efdb75c8', title: 'PATENT_TITLE_4662' },
            ]}
        />
    </Box>
)

export default App