import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3a6917ba-d481-4b85-8cf9-8fa4721f38ef', title: 'PATENT_TITLE_5332' },
                { id: '8b365c03-2d94-4942-84e3-1592d05076c8', title: 'PATENT_TITLE_9441' },
                { id: '051e0c05-ccc1-4546-a1e8-1a13a1cc7317', title: 'PATENT_TITLE_9074' },
                { id: '9bd8524a-40c5-4b9b-a59f-6a3cce440d1f', title: 'PATENT_TITLE_3282' },
                { id: '34b17fe4-e875-4d55-b5d7-bf8a1042cba3', title: 'PATENT_TITLE_9878' },
                { id: '0d702c1a-104d-4fb3-b4b3-1ff0193e19c3', title: 'PATENT_TITLE_3239' },
                { id: '745fb471-e61d-45a8-b72c-0934ac725241', title: 'PATENT_TITLE_9704' },
                { id: 'a049a3d4-4dc8-4897-b9d5-6432ca59be83', title: 'PATENT_TITLE_2701' },
                { id: '959fed9b-0d0d-4bc9-b8db-aa814ee1c05e', title: 'PATENT_TITLE_9554' },
                { id: 'bcfcb7a5-6408-4141-b021-540aef9e2c11', title: 'PATENT_TITLE_5586' },
            ]}
        />
    </Box>
)

export default App