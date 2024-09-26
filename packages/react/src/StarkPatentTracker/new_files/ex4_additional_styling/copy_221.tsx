import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fe7ab8f7-3f3f-4375-8474-688d4a10fd34', title: 'PATENT_TITLE_9273' },
                { id: '5a41fece-bcd3-4bc4-8b36-d1951e4ea302', title: 'PATENT_TITLE_5582' },
                { id: '92c98d9f-0b4c-4e3f-9de4-68c6f4eb252e', title: 'PATENT_TITLE_8126' },
                { id: '1da7720d-757a-4fcb-9e9a-0de0569e337c', title: 'PATENT_TITLE_1372' },
                { id: 'cabd4bf9-2736-4dd2-96ae-bf0e04b21380', title: 'PATENT_TITLE_8200' },
                { id: 'c9f618e7-868c-4cb0-859a-82fd476817c5', title: 'PATENT_TITLE_4799' },
                { id: '8d040c62-9fb3-4c5f-8daf-a018f9d29de5', title: 'PATENT_TITLE_9701' },
                { id: '9128adb3-bba4-4d7c-b326-07200be20b7b', title: 'PATENT_TITLE_6123' },
            ]}
        />
    </Box>
)

export default App