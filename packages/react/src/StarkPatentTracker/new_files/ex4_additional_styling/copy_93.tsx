import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '59ae231b-200c-43e9-83c2-cfa855312695', title: 'PATENT_TITLE_6676' },
                { id: '6ec3e09d-ed8b-4260-a9b4-27b6451fdbe8', title: 'PATENT_TITLE_3923' },
                { id: 'bbf26ebb-05db-4f2a-91fb-82d9c2c27878', title: 'PATENT_TITLE_9583' },
                { id: '62e42a75-e28d-4aaf-a511-41c7d8b61b6d', title: 'PATENT_TITLE_5333' },
                { id: '056b0469-a192-4f46-830d-ed71e27b078f', title: 'PATENT_TITLE_4776' },
                { id: 'fff71500-2b33-4454-8a5b-bc23d26acdf8', title: 'PATENT_TITLE_4437' },
                { id: 'c12cabb4-04b9-4de3-88b7-e1d8aaa4d80c', title: 'PATENT_TITLE_5665' },
                { id: '44ad6469-c4cb-45e8-8695-e052a3de6cd7', title: 'PATENT_TITLE_5391' },
                { id: 'd8643fb4-1a57-4589-8a80-18e6e68840ed', title: 'PATENT_TITLE_2574' },
            ]}
        />
    </Box>
)

export default App