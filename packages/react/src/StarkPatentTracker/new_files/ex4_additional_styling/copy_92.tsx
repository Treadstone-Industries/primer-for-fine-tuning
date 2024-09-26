import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'efb4cf72-2a9d-443c-8fc8-6448eaf0b010', title: 'PATENT_TITLE_5679' },
                { id: '41dc010c-3548-407c-94bc-90e7cc7094ef', title: 'PATENT_TITLE_6798' },
                { id: '60f50cb7-0d8b-479c-a90f-9b2df1f07d3f', title: 'PATENT_TITLE_4837' },
                { id: '051d6a17-2d74-4da1-af54-2e9c2fe1e03d', title: 'PATENT_TITLE_8229' },
                { id: 'df0f61af-da5e-4eae-bccd-f78dec581cff', title: 'PATENT_TITLE_7873' },
                { id: '2a0d956b-f583-42c5-a962-36b4f82f96cb', title: 'PATENT_TITLE_6998' },
                { id: '0ca33191-b3ec-4325-ba9d-e404d0fa9721', title: 'PATENT_TITLE_9672' },
            ]}
        />
    </Box>
)

export default App