import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4caf7411-2502-4946-95e4-f568e86e28bf', title: 'PATENT_TITLE_1247' },
                { id: 'f6be92d0-d5e1-4457-a9e6-6b43d74cc459', title: 'PATENT_TITLE_8118' },
                { id: '949538c8-28b0-4b4e-b9db-c75b5172a788', title: 'PATENT_TITLE_5715' },
                { id: '99365699-bc00-4cd4-a67f-250a962ece0d', title: 'PATENT_TITLE_7299' },
                { id: 'b73a5950-e255-49ce-a16a-75badda6b26b', title: 'PATENT_TITLE_7980' },
                { id: '17f90635-329b-4882-81c0-4854211f95e8', title: 'PATENT_TITLE_4450' },
                { id: '5a2bf349-9efd-45d4-a217-a265864d1a44', title: 'PATENT_TITLE_9877' },
                { id: 'c99b1ac6-cf96-49a0-9eb3-72411948c24e', title: 'PATENT_TITLE_8988' },
                { id: 'f5956835-b15f-46d1-976d-e4db62188faa', title: 'PATENT_TITLE_3270' },
                { id: 'a4af6ddc-73a5-4716-bd67-7a9840a52003', title: 'PATENT_TITLE_9903' },
            ]}
        />
    </Box>
)

export default App