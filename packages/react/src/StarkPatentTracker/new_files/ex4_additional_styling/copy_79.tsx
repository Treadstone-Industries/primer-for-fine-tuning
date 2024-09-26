import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c91b4813-58af-464c-b5dc-1c8619e303c4', title: 'PATENT_TITLE_3493' },
                { id: 'ee5f656a-e04f-4e5b-9160-f63c264d19dc', title: 'PATENT_TITLE_2441' },
                { id: '08f6819f-c037-4201-bfbc-7eb73c01854f', title: 'PATENT_TITLE_8850' },
                { id: '1dc616d7-5279-4bb0-9149-090e5a579557', title: 'PATENT_TITLE_9635' },
                { id: '1dd0191f-7aeb-41e1-acc5-0de9237ea3c2', title: 'PATENT_TITLE_6971' },
                { id: '7d93690a-946b-4222-b748-6cd3352df150', title: 'PATENT_TITLE_5960' },
                { id: 'ef6fcece-003b-4237-b131-30303635f3b7', title: 'PATENT_TITLE_7497' },
            ]}
        />
    </Box>
)

export default App