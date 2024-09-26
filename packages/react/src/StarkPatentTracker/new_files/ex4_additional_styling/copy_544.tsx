import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '529abec8-c773-4634-bc9a-996a1e672d72', title: 'PATENT_TITLE_7053' },
                { id: 'b68e4e2b-28e7-4065-8c65-7f2168a1cf80', title: 'PATENT_TITLE_3688' },
                { id: '4b0cd57e-d551-429f-81ec-3fab8fe43b83', title: 'PATENT_TITLE_9012' },
                { id: '0cb722a5-0a08-48d8-9a8e-784f82a99f22', title: 'PATENT_TITLE_8444' },
                { id: 'ab7358b8-d99b-447e-83a6-e3ce787151d7', title: 'PATENT_TITLE_2370' },
                { id: '9c4591dd-b75d-4bc2-8096-49649ad69acb', title: 'PATENT_TITLE_2803' },
                { id: '2525125e-0f1e-4d35-8b08-0675494326ab', title: 'PATENT_TITLE_3705' },
                { id: '71ea6556-4d1d-4278-b5e3-6e7ae36a67fc', title: 'PATENT_TITLE_2781' },
                { id: '4781cab4-c230-48be-b5bb-6f25d46f3ccc', title: 'PATENT_TITLE_8267' },
                { id: '94127c90-4fac-4778-aa71-33e463b6c249', title: 'PATENT_TITLE_8363' },
            ]}
        />
    </Box>
)

export default App