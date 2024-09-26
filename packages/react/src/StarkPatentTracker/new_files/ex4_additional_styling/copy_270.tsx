import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1e7e599c-21cb-463b-9da9-6e82b263b3b6', title: 'PATENT_TITLE_8550' },
                { id: '27eaf5fc-3c9c-49c6-bece-eae5129e5dd2', title: 'PATENT_TITLE_1587' },
                { id: 'ce488d1a-a3bf-4b2b-848e-67139b766082', title: 'PATENT_TITLE_6355' },
                { id: '20a1e50e-ea67-4377-9f55-b54a724342b5', title: 'PATENT_TITLE_4581' },
                { id: '87e15bca-f4fc-4b8f-a51f-732b1df2a88a', title: 'PATENT_TITLE_6953' },
                { id: '1985915c-5299-42e8-bbca-ff9e4f20d4b7', title: 'PATENT_TITLE_9749' },
                { id: 'b3a2e5f5-2291-4ca2-9ec9-fd8c12546979', title: 'PATENT_TITLE_6360' },
                { id: 'a70c34f6-5caf-491b-998e-0a39dc3c309e', title: 'PATENT_TITLE_6121' },
                { id: '97bdb73e-b5a2-4ab9-9be3-ac4a5c14a87f', title: 'PATENT_TITLE_6424' },
                { id: '3d9733c6-01be-40c4-b395-aa0bf9412efb', title: 'PATENT_TITLE_9288' },
            ]}
        />
    </Box>
)

export default App