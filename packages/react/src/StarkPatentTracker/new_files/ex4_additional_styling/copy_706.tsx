import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '82487ebc-6e15-410a-9818-a5e5763bac99', title: 'PATENT_TITLE_6799' },
                { id: 'e831f284-fda8-4b8b-ab22-d9c2ef0e09cb', title: 'PATENT_TITLE_9020' },
                { id: '7d0dad00-17ca-4273-8cfe-2c4758c2c0e3', title: 'PATENT_TITLE_3405' },
                { id: '2f9ac4ef-9586-458d-82ff-6939f836f738', title: 'PATENT_TITLE_8081' },
                { id: 'da6cfa92-0722-4600-afb4-ec4ee29f27b7', title: 'PATENT_TITLE_1366' },
                { id: 'e41dc61c-d2cd-4d8b-846c-fcfddbb80c34', title: 'PATENT_TITLE_7878' },
                { id: '1617f63f-14c1-47ca-82df-0f9c5eb4bee1', title: 'PATENT_TITLE_6648' },
                { id: '8996fb1e-5503-429b-83c5-d1af7b4cddf5', title: 'PATENT_TITLE_5278' },
                { id: 'fe139f34-8f93-4dfa-8b8d-1cd825647b9a', title: 'PATENT_TITLE_6411' },
            ]}
        />
    </Box>
)

export default App