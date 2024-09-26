import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0b697755-dc04-4f7e-b7fd-40a18d266ef3', title: 'PATENT_TITLE_2638' },
                { id: 'd32c9095-5696-4a12-a274-b484906d0aba', title: 'PATENT_TITLE_7194' },
                { id: '22ad4596-d226-4e94-8d2d-0e6e2cc94ad9', title: 'PATENT_TITLE_6805' },
                { id: 'dafacda9-00cc-49d9-a59d-307b2e00c1dd', title: 'PATENT_TITLE_9576' },
                { id: '721bee31-a958-47cd-8bf6-5bcee5d27510', title: 'PATENT_TITLE_3068' },
                { id: '268fcaf6-867f-4ef1-ab51-835fa6aba9fd', title: 'PATENT_TITLE_2602' },
                { id: '369cc6ce-728c-4dc2-8050-0fa1de779f24', title: 'PATENT_TITLE_7019' },
                { id: 'abe9ab5f-a2ba-42ad-94d8-032b88e783f2', title: 'PATENT_TITLE_2593' },
                { id: 'b4225cea-c187-4bdf-b18c-1fd6e3026ba5', title: 'PATENT_TITLE_8457' },
                { id: 'ffddf1ac-e415-4f44-9d19-17e222ba52d3', title: 'PATENT_TITLE_2479' },
            ]}
        />
    </Box>
)

export default App