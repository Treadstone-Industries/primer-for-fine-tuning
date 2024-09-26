import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '621b0b41-4f31-4f09-ac89-df2084e975e2', title: 'PATENT_TITLE_9450' },
                { id: '5dd33216-0b08-44df-9fe7-26e876ecf4c9', title: 'PATENT_TITLE_3109' },
                { id: '6098f1f0-f6e5-4eb9-b1d5-4f43074b743d', title: 'PATENT_TITLE_5674' },
                { id: 'dea88a0d-0a37-45ca-9652-64856dc9a618', title: 'PATENT_TITLE_4482' },
                { id: 'dcddf6aa-0e24-49b4-9589-1d6891241d39', title: 'PATENT_TITLE_6529' },
                { id: '1f3b727c-2b93-4889-8562-e5b498bfdde6', title: 'PATENT_TITLE_5680' },
                { id: '2f30ef97-0c14-496c-b613-73dc7c60f1a8', title: 'PATENT_TITLE_6532' },
                { id: 'a12eccd6-e798-4351-beb9-43c81875d3cb', title: 'PATENT_TITLE_2094' },
            ]}
        />
    </Box>
)

export default App