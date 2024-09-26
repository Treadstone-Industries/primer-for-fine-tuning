import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '34fcd116-4b57-4690-a045-786539f2d8ed', title: 'PATENT_TITLE_9240' },
                { id: '6edfdee5-9aac-4cb4-8b9e-89e20fdc1140', title: 'PATENT_TITLE_9867' },
                { id: 'dfa9899a-ce7e-4880-b732-a62d7ee04cea', title: 'PATENT_TITLE_6485' },
                { id: 'd62d34d8-bafd-4886-91da-4ba4d04e1ce7', title: 'PATENT_TITLE_8941' },
                { id: '37218793-ab86-47cc-8c26-479bfefee8ff', title: 'PATENT_TITLE_2933' },
                { id: 'f2558e6c-7cf6-44ac-b86b-77eaf7edbde2', title: 'PATENT_TITLE_5743' },
                { id: 'a8e5a6ae-2f36-4dbf-9197-7754ae7cb9b8', title: 'PATENT_TITLE_8535' },
                { id: '9f38f51a-5b85-44fd-a95f-668794306e06', title: 'PATENT_TITLE_9099' },
                { id: 'f9a1d2fb-6ed1-4839-b7e2-41518537fad5', title: 'PATENT_TITLE_5725' },
            ]}
        />
    </Box>
)

export default App