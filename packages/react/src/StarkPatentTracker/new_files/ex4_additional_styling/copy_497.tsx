import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '95e08353-6957-4a86-9ae2-18c0cae0e463', title: 'PATENT_TITLE_3414' },
                { id: 'a8c3bb8a-4931-464f-b4f0-9fb258bd623d', title: 'PATENT_TITLE_7175' },
                { id: '67555a13-4750-4c2e-81b9-58912ccb4ad4', title: 'PATENT_TITLE_8116' },
                { id: 'b167587a-2e00-49f2-9973-a840fb7c13ae', title: 'PATENT_TITLE_9598' },
                { id: '33cc03f6-76cd-4c60-be1e-2f387bc77b96', title: 'PATENT_TITLE_2234' },
                { id: '147cf814-0a3d-4d55-af09-9fea18317d5f', title: 'PATENT_TITLE_5620' },
                { id: 'ca78c756-15d2-4445-b69d-0c81e27f9520', title: 'PATENT_TITLE_1265' },
                { id: 'b96fcb92-ca41-4112-96fa-06f02d4e4cc8', title: 'PATENT_TITLE_8012' },
            ]}
        />
    </Box>
)

export default App