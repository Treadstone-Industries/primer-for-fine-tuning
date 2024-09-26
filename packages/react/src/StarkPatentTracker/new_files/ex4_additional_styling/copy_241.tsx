import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '989372c2-a2d9-4607-9b09-25a4e52e5282', title: 'PATENT_TITLE_6997' },
                { id: '46c859c0-7244-4d8d-a81f-13af6a0727e2', title: 'PATENT_TITLE_6024' },
                { id: 'b1517d2a-7c4f-4dc4-9289-a99113c98cbc', title: 'PATENT_TITLE_1596' },
                { id: '30729036-2b67-4f2e-b572-e37772fed7db', title: 'PATENT_TITLE_6820' },
                { id: '52d68aa2-2f49-46df-8dd0-a47dec419bdc', title: 'PATENT_TITLE_3076' },
                { id: '60ac24e0-7294-4d46-b587-3c53d36c8838', title: 'PATENT_TITLE_8829' },
                { id: '807221ec-52ff-4f3f-8c91-8263c0502975', title: 'PATENT_TITLE_1962' },
                { id: 'a7edd68a-4e78-4253-8ba6-4d6814313d32', title: 'PATENT_TITLE_4861' },
                { id: 'e1f112de-549b-4d75-8cc1-ea869a09c923', title: 'PATENT_TITLE_3288' },
            ]}
        />
    </Box>
)

export default App