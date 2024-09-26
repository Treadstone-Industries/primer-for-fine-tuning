import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b7ebea05-dc8f-43ad-aa62-1a7978aa16d4', title: 'PATENT_TITLE_2663' },
                { id: 'df7c6645-1ec7-452b-bb0f-0ec02136c0d2', title: 'PATENT_TITLE_4129' },
                { id: 'b4f9b735-7d59-4411-b0fc-0d1de0ed2c47', title: 'PATENT_TITLE_3896' },
                { id: 'aba59ba9-82ee-41af-b992-3945b91e0d33', title: 'PATENT_TITLE_9426' },
                { id: '5cb311f8-0401-4e37-ba76-c5e81862d8eb', title: 'PATENT_TITLE_5239' },
                { id: '22f828e0-5b65-482d-8ae9-e4a184dd1439', title: 'PATENT_TITLE_5042' },
                { id: '033f713d-cee3-4989-8757-6ab5e1753af5', title: 'PATENT_TITLE_9144' },
                { id: '567a6e37-7b45-4427-9427-d831f6918b0b', title: 'PATENT_TITLE_5078' },
                { id: '00f8b514-fdf8-4268-8c0a-3dd9023519c7', title: 'PATENT_TITLE_8475' },
                { id: '0504d990-057c-4c3b-9d3a-e73e949b36d1', title: 'PATENT_TITLE_8683' },
            ]}
        />
    </Box>
)

export default App