import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2967fb7e-d0f3-4e60-a041-426b6c8e4158', title: 'PATENT_TITLE_8502' },
        { id: '82bba082-d5e1-45ad-b42f-9c8fca574956', title: 'PATENT_TITLE_9766' },
        { id: '6edc5c85-3cee-421f-8492-24934d5942e7', title: 'PATENT_TITLE_4447' },
        { id: '237c8120-4826-4f22-b125-1159433fc6f3', title: 'PATENT_TITLE_7446' },
        { id: '446eed89-ada3-4ac6-9ee2-e711c9b5f2f0', title: 'PATENT_TITLE_5922' },
        { id: '2556bee1-2969-4bc1-889e-4c70b896ac75', title: 'PATENT_TITLE_2882' },
        { id: '26837f64-41ee-4024-9c50-dd280963d1df', title: 'PATENT_TITLE_3955' },
        { id: '0332d1ea-4c59-4015-b6d3-6505bf615f69', title: 'PATENT_TITLE_9916' },
        { id: '6b587936-27e2-4158-9e7f-01276eea2728', title: 'PATENT_TITLE_8288' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App