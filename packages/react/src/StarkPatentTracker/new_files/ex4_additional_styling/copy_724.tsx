import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ed62eaf5-bcac-41f5-aa80-72e14070eae8', title: 'PATENT_TITLE_8142' },
                { id: '86a9241e-ca12-417b-b50c-c7ec560c384c', title: 'PATENT_TITLE_5590' },
                { id: 'f876980c-83cc-4949-a949-8ddcc942f5ce', title: 'PATENT_TITLE_2032' },
                { id: 'cc95e8d0-14e4-4e0c-96f7-efe9db3018b9', title: 'PATENT_TITLE_9726' },
                { id: 'd598360e-b7b3-4e9f-a70d-05c2613cb977', title: 'PATENT_TITLE_7714' },
                { id: '8ccf85b6-5607-4e21-b4d0-fee139fcad4d', title: 'PATENT_TITLE_8130' },
                { id: 'a7a16005-f089-45d4-9d37-6aad366e7783', title: 'PATENT_TITLE_9621' },
            ]}
        />
    </Box>
)

export default App