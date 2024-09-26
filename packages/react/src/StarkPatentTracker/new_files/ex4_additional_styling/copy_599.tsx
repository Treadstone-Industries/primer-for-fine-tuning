import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3eeb8168-8c7b-4216-800c-5cbe65715193', title: 'PATENT_TITLE_2508' },
                { id: 'cc3c52c6-cd6b-4778-a852-df7155030430', title: 'PATENT_TITLE_2171' },
                { id: 'eeb2f682-e202-43de-a8b9-921aad3dc0f1', title: 'PATENT_TITLE_7402' },
                { id: '4a8e3a8b-4914-4aab-863a-ad808722e822', title: 'PATENT_TITLE_3733' },
            ]}
        />
    </Box>
)

export default App