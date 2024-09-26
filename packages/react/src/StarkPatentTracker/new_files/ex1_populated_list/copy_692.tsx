import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e3cf2c2c-7b48-4c0a-9192-a56609ad6950', title: 'PATENT_TITLE_1553' },
            { id: '03ee51ef-d69d-45a6-9d76-b0677bce48fe', title: 'PATENT_TITLE_5888' },
            { id: '3dafdea0-3695-458d-b724-5e4ff729bf7c', title: 'PATENT_TITLE_5456' },
            { id: '2d00331a-0eee-4e15-a022-04e014ca3044', title: 'PATENT_TITLE_9603' },
            { id: '872e98c8-97fe-4657-8d43-00e659ec14f8', title: 'PATENT_TITLE_3162' },
            { id: 'f511db7d-286f-4c61-a7f7-97374e583074', title: 'PATENT_TITLE_6203' },
            { id: '533ddada-3e37-4340-89e5-9673e0c1c15e', title: 'PATENT_TITLE_3264' },
        ]}
    />
)

export default App