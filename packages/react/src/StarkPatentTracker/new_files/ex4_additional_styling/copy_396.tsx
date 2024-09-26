import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '458737d5-209f-43e2-ab09-ace759053e36', title: 'PATENT_TITLE_4399' },
                { id: 'c5330856-515c-4b7b-a83b-ebd890ae2af1', title: 'PATENT_TITLE_9445' },
                { id: 'b444269c-3516-4ddb-97d4-cf65b5d39c06', title: 'PATENT_TITLE_1230' },
                { id: '54e522d0-d009-41a7-96c4-8d5928f63d3c', title: 'PATENT_TITLE_6884' },
                { id: '8f2af816-fa73-4a79-bf81-8db420371349', title: 'PATENT_TITLE_2730' },
                { id: 'ee82ac0b-74b3-4eae-9df4-3511c9f67bb8', title: 'PATENT_TITLE_7476' },
                { id: '08a88a21-e63f-4b75-a6c7-5268a7885674', title: 'PATENT_TITLE_1393' },
                { id: 'a9b1b718-ff01-4e8e-b25b-8167c3373f2f', title: 'PATENT_TITLE_8205' },
                { id: '2b27e5f0-6289-42eb-a8b0-fcdffbae18c4', title: 'PATENT_TITLE_7153' },
                { id: 'b44927ee-956b-4273-9651-d3991fc90dc5', title: 'PATENT_TITLE_8090' },
            ]}
        />
    </Box>
)

export default App