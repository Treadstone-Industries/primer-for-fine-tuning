import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a7bd87b1-b9a7-4cb4-a0e5-832a8ed17f05', title: 'PATENT_TITLE_8493' },
                { id: '9380eca8-baf4-404b-bdd9-163f6531388b', title: 'PATENT_TITLE_3314' },
                { id: 'd002095d-e48f-4614-9a06-f049fe39bf33', title: 'PATENT_TITLE_5874' },
                { id: 'd358caad-0ffd-4582-8c21-1cecdd424a0b', title: 'PATENT_TITLE_2426' },
                { id: 'a148c48e-da2b-4e65-8ce6-a4ced079327d', title: 'PATENT_TITLE_7230' },
                { id: '0ecea723-f794-4f3d-b879-5f1169ab3986', title: 'PATENT_TITLE_8257' },
                { id: '6d9e4346-4e07-4e6e-9192-004610b81d11', title: 'PATENT_TITLE_6683' },
            ]}
        />
    </Box>
)

export default App