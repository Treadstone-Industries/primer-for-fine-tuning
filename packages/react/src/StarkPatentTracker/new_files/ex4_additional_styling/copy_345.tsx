import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2bca25dc-ad64-4a11-a9a9-0e47edc69f19', title: 'PATENT_TITLE_7103' },
                { id: '9b083339-180c-4529-aa15-9dbba041500f', title: 'PATENT_TITLE_3387' },
                { id: '6c6cd23c-50c0-479d-b1af-c3148aee9145', title: 'PATENT_TITLE_5894' },
                { id: '958ecffd-8063-4d46-8304-084b5ba6e0f2', title: 'PATENT_TITLE_9755' },
                { id: '4f3cc5e2-dc5d-43d4-8d3e-55e698eadcd4', title: 'PATENT_TITLE_3297' },
                { id: '6a216425-884b-49d5-b2f4-4afd14fa5c4e', title: 'PATENT_TITLE_7565' },
                { id: 'efc09d94-a6ee-4ee2-a329-af0165666041', title: 'PATENT_TITLE_7139' },
                { id: 'e79b7b87-2eb8-49bd-a35a-620075d925cd', title: 'PATENT_TITLE_5565' },
                { id: 'd793350a-25e0-4bbf-85a9-b611361c6582', title: 'PATENT_TITLE_9768' },
                { id: '761aefa2-3e30-41d7-b3be-4a42459e513e', title: 'PATENT_TITLE_5780' },
            ]}
        />
    </Box>
)

export default App