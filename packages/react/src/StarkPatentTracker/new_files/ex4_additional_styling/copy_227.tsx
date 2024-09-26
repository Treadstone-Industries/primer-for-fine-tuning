import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bccb601f-3090-4978-8a95-a0ab0e3df7c6', title: 'PATENT_TITLE_7793' },
                { id: 'dc8be5db-c6ad-45eb-bea8-7705fc12f2d7', title: 'PATENT_TITLE_3084' },
                { id: '9b6fa16c-2a1d-4daf-b1a9-1d92be765815', title: 'PATENT_TITLE_3818' },
                { id: '87b97200-058d-42b9-9e67-48e4be236c75', title: 'PATENT_TITLE_4304' },
                { id: 'f1defb19-66f4-4948-8402-87b7db751bf5', title: 'PATENT_TITLE_7646' },
                { id: '4333b877-9f66-4628-8619-8a6a68652b55', title: 'PATENT_TITLE_2743' },
                { id: '5ad57e7b-ecdb-43cc-b515-cfc532b682cc', title: 'PATENT_TITLE_6953' },
                { id: 'a7d47bac-9fe4-4986-8980-d36b63848f02', title: 'PATENT_TITLE_3559' },
            ]}
        />
    </Box>
)

export default App