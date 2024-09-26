import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a7ce1332-f34a-4c3f-aabe-f51a48cff2f4', title: 'PATENT_TITLE_7931' },
                { id: 'c562334a-76f4-4108-9bb0-6b494d5bd167', title: 'PATENT_TITLE_9517' },
                { id: '73248d4b-48e1-4ab9-a8e5-f831da8def85', title: 'PATENT_TITLE_4148' },
                { id: 'f3808990-0c06-4329-b8e8-2c3a937d0a9a', title: 'PATENT_TITLE_7208' },
                { id: '7aecb945-826c-45f2-aea0-0527b6efcea0', title: 'PATENT_TITLE_9654' },
                { id: '6d44df47-4cd0-4706-bffa-32a7c7149aca', title: 'PATENT_TITLE_6910' },
                { id: '52e15216-bbcd-4314-9c89-27e75daf3cdf', title: 'PATENT_TITLE_5736' },
            ]}
        />
    </Box>
)

export default App