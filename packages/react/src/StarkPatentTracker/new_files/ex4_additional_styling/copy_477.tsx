import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8ed67dfa-6764-4c62-8d22-fa6051880255', title: 'PATENT_TITLE_5834' },
                { id: 'f286aa5a-c5d0-4d96-8462-9890a2f3c636', title: 'PATENT_TITLE_8585' },
                { id: 'cf003b6f-c229-4b65-a15c-1b9ef66f6bbe', title: 'PATENT_TITLE_3581' },
                { id: 'b8f8b49d-6d80-445a-bbdf-4875dc5e7cbf', title: 'PATENT_TITLE_1418' },
                { id: 'd558625e-943f-45b1-96bd-0a77013250a3', title: 'PATENT_TITLE_8258' },
                { id: '4dac539b-d956-4944-aa2d-ee19ba6a8094', title: 'PATENT_TITLE_3433' },
                { id: '8f573c59-1751-4c32-bd57-72538eec56c0', title: 'PATENT_TITLE_9758' },
                { id: 'e4a36607-8bda-4997-b516-5310165712ad', title: 'PATENT_TITLE_9620' },
                { id: 'fc2644e7-18dd-4fdf-b83f-430a7b0a1cbf', title: 'PATENT_TITLE_2144' },
                { id: '8e8598fd-e700-489a-8792-d5cf87e86a54', title: 'PATENT_TITLE_4590' },
            ]}
        />
    </Box>
)

export default App