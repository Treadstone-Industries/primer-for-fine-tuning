import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '507490df-93cf-49a3-80ad-1ba1a16f2244', title: 'PATENT_TITLE_2192' },
                { id: 'db1b75fb-06a3-44bd-a27a-5ea160fea6a4', title: 'PATENT_TITLE_1132' },
                { id: 'be6aad51-3062-44e5-b2b4-a3af7402c6ea', title: 'PATENT_TITLE_9838' },
                { id: '0501dfa7-ee12-4642-9f29-8222958c84bf', title: 'PATENT_TITLE_9645' },
                { id: '742089a0-888c-4fe6-8626-6fbfde94899b', title: 'PATENT_TITLE_4632' },
            ]}
        />
    </Box>
)

export default App