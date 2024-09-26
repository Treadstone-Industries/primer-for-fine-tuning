import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '81e6f5d4-1691-4105-9e3c-23c37d794c54', title: 'PATENT_TITLE_7425' },
                { id: '4c463a36-81aa-4d6f-ba01-f683b45d6f8f', title: 'PATENT_TITLE_2221' },
                { id: '2179994e-5745-4d74-995d-e4edcdc43580', title: 'PATENT_TITLE_6273' },
                { id: '5106b4fc-9aa7-4628-a555-4352b3b496d4', title: 'PATENT_TITLE_4147' },
                { id: '0db088ad-19c3-40b9-a28b-45d4194a76f7', title: 'PATENT_TITLE_9772' },
                { id: '151a4004-7d80-4056-bde8-8563e6a579a8', title: 'PATENT_TITLE_3301' },
                { id: 'a1de1c34-2a25-4f84-a582-6e41215756d7', title: 'PATENT_TITLE_3471' },
            ]}
        />
    </Box>
)

export default App