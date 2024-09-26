import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'acd2f054-43f3-43df-9106-37b36e688d02', title: 'PATENT_TITLE_1064' },
                { id: '945e2291-4aad-4e31-9aaf-f587dd1f0323', title: 'PATENT_TITLE_6637' },
                { id: '59b0b07e-f7f1-42f7-84e0-858a44fd9890', title: 'PATENT_TITLE_6522' },
                { id: '9f80c37e-0528-4229-9b8d-87c3268cc7fa', title: 'PATENT_TITLE_7235' },
                { id: 'cd620cd3-e2c5-4853-95d1-0c6f7dae340a', title: 'PATENT_TITLE_9621' },
                { id: 'd7657b77-bf0e-4edf-8c5c-3bb641fdac5d', title: 'PATENT_TITLE_8211' },
                { id: '4d339d74-3ed7-48f7-8780-96818fc0ee01', title: 'PATENT_TITLE_6529' },
                { id: '9c494968-464e-41aa-94ce-9373bd22b50d', title: 'PATENT_TITLE_7524' },
                { id: 'fc61f10c-c51d-49dc-9139-916029296d79', title: 'PATENT_TITLE_4987' },
                { id: '85affd05-2172-421a-95f0-6a88628edf05', title: 'PATENT_TITLE_5711' },
            ]}
        />
    </Box>
)

export default App