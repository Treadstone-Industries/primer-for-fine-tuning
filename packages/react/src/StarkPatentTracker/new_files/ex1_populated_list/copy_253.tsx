import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5249221c-420a-4b2a-8235-b8d7793e8f1f', title: 'PATENT_TITLE_8800' },
            { id: 'f314aa01-146f-433d-ac3e-57a8a17674da', title: 'PATENT_TITLE_1996' },
            { id: '713ee06c-4dbb-4c1e-9b6b-29f8cffb9b23', title: 'PATENT_TITLE_3810' },
            { id: 'd62d3323-14f7-4d16-8d83-806d7581a21e', title: 'PATENT_TITLE_4629' },
            { id: 'a52ad3e3-0fa8-4258-b52d-f5107b06839c', title: 'PATENT_TITLE_7309' },
            { id: '97e99d78-12a5-4938-9b5b-4a1358659e6a', title: 'PATENT_TITLE_4912' },
            { id: '2cf26b29-9177-4b40-90ca-865ca03362cb', title: 'PATENT_TITLE_6362' },
            { id: '16f46169-5507-42da-b330-d1977cd24dc8', title: 'PATENT_TITLE_3762' },
        ]}
    />
)

export default App