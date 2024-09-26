import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'edd129e4-00fe-4ac7-af46-fe25f39d7485', title: 'PATENT_TITLE_3816' },
                { id: 'cf84d3e0-1e19-4502-aeb8-40c88a6f7970', title: 'PATENT_TITLE_2593' },
                { id: 'a1e8a18c-ab0a-4b3f-ade1-177f2f2e726a', title: 'PATENT_TITLE_7316' },
                { id: 'f4f697fa-1bd1-4abc-8a35-a87747d273cd', title: 'PATENT_TITLE_7896' },
                { id: 'd5b8aea3-5598-4474-9017-71ddd861dbca', title: 'PATENT_TITLE_5929' },
                { id: '3696c6aa-0b3f-43b5-8e1c-a011378a5ae9', title: 'PATENT_TITLE_1269' },
                { id: '5a07fa34-4df4-422c-aad5-996356f0926f', title: 'PATENT_TITLE_3871' },
                { id: 'e139f1ed-3020-4c25-8eb8-f99cc664654d', title: 'PATENT_TITLE_7826' },
                { id: '51cf481a-fab7-421e-ab60-da1476fd1903', title: 'PATENT_TITLE_2714' },
                { id: '9ac2ac89-4cd3-4507-aa0f-53414eab0d23', title: 'PATENT_TITLE_3792' },
            ]}
        />
    </Box>
)

export default App