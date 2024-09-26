import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bdf06c39-d105-4153-8c82-85912cfa89e3', title: 'PATENT_TITLE_1941' },
                { id: 'b8ac110b-cb91-467a-b4b6-4572c3a64603', title: 'PATENT_TITLE_6285' },
                { id: '27681fee-5df8-485c-87aa-5f7250457370', title: 'PATENT_TITLE_1980' },
                { id: 'f1e29672-e562-4416-b9cf-b8ee8bb8d6ef', title: 'PATENT_TITLE_7597' },
                { id: '54d830b2-85b1-4d8a-9c26-50b0b07c221c', title: 'PATENT_TITLE_6448' },
                { id: '0e0b4d6b-51b9-4902-a6bf-a69f3f168927', title: 'PATENT_TITLE_2230' },
                { id: 'fc7b60b5-924e-4cb8-b0d5-cf402c0db9df', title: 'PATENT_TITLE_8509' },
                { id: '24743ed5-ae9b-4c0a-be1d-6184c5ec9c87', title: 'PATENT_TITLE_9296' },
                { id: 'a04550d6-0a21-4fd6-9e21-d8d9094a85be', title: 'PATENT_TITLE_4249' },
                { id: '8cba6cb2-00ec-42d8-b1f2-ef5533c2193d', title: 'PATENT_TITLE_2666' },
            ]}
        />
    </Box>
)

export default App