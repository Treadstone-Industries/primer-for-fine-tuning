import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7956b52e-996c-4052-b724-7fc488e363be', title: 'PATENT_TITLE_7923' },
                { id: '0c303885-d22b-49f2-ba1a-59eadb5e47ea', title: 'PATENT_TITLE_5060' },
                { id: '90ca647c-5e8b-4174-b323-8b0a597dfb60', title: 'PATENT_TITLE_2481' },
                { id: '989632ff-d294-4323-af63-783d29558657', title: 'PATENT_TITLE_3188' },
                { id: 'c50f768f-d6b7-4ddb-bfa8-47086c71f97c', title: 'PATENT_TITLE_4512' },
                { id: '145bf4c0-774d-4c5a-94e7-a76374793855', title: 'PATENT_TITLE_2520' },
                { id: '9c6b5cb7-01ba-4133-9b62-e8d86249e7e6', title: 'PATENT_TITLE_3341' },
                { id: 'b08063af-2c80-4db2-83d1-5f2bbfb3b54f', title: 'PATENT_TITLE_7922' },
                { id: '6ee81752-29ad-47c0-a3f8-87fb3807d19a', title: 'PATENT_TITLE_6831' },
                { id: '58480b68-20e4-4fc1-8fd8-0137811160ef', title: 'PATENT_TITLE_5437' },
            ]}
        />
    </Box>
)

export default App