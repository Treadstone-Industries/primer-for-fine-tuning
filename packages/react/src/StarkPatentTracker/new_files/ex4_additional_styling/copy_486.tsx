import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '299100e7-ca09-433e-8d82-3fcdf4561db1', title: 'PATENT_TITLE_1280' },
                { id: '37e86596-7e5c-4e78-b9c6-02c091e8efa7', title: 'PATENT_TITLE_4994' },
                { id: 'cdb7c246-de47-4316-8e43-ddfd735581b7', title: 'PATENT_TITLE_2296' },
                { id: 'eef4a273-fe97-4488-b530-ce51aa77cc46', title: 'PATENT_TITLE_5701' },
                { id: 'f2158fe4-5427-4c0f-9b9b-20abb330a073', title: 'PATENT_TITLE_1361' },
                { id: '8ecd5a19-5fee-4a79-a50c-6aa12b61f9d8', title: 'PATENT_TITLE_1785' },
                { id: '836224e3-16ca-4b74-b377-96f81ca9b570', title: 'PATENT_TITLE_7079' },
                { id: '3ef61793-6650-444f-858c-2c612b7d5826', title: 'PATENT_TITLE_8185' },
                { id: '11b82a0c-e466-4be3-be2b-53651593c17c', title: 'PATENT_TITLE_5484' },
                { id: 'cda7dd61-e2e5-4aca-9fca-6dfebc4db5c2', title: 'PATENT_TITLE_4860' },
            ]}
        />
    </Box>
)

export default App