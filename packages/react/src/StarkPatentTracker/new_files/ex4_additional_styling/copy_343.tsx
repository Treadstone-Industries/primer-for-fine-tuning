import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '352a5817-901a-46a7-a7d0-e0a1a9723a51', title: 'PATENT_TITLE_1844' },
                { id: '05f3d777-e6ad-499e-a70a-3821f84ac274', title: 'PATENT_TITLE_4364' },
                { id: '4396ce58-f268-4834-9a33-f1a01f02e56d', title: 'PATENT_TITLE_2171' },
                { id: 'cc5d977f-6aba-404c-b291-0a6fd4f4ccb7', title: 'PATENT_TITLE_3754' },
                { id: '792103dc-833f-45e7-bdc3-d4678cdc3089', title: 'PATENT_TITLE_1571' },
                { id: '8c34ab2b-807e-43c2-be23-1f870916f655', title: 'PATENT_TITLE_1220' },
                { id: '27dd1961-3b58-4688-a0bd-cb1f4e20f4ba', title: 'PATENT_TITLE_3179' },
                { id: 'e120051b-4a28-4262-9109-c88c0e7c6ae7', title: 'PATENT_TITLE_4524' },
                { id: 'fb3c2e03-5354-44cb-92b6-dba3e4ef5923', title: 'PATENT_TITLE_6733' },
            ]}
        />
    </Box>
)

export default App