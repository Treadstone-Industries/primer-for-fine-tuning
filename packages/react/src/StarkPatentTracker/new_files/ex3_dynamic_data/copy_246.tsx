import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c93ab533-c553-4c2e-9f6c-c3e4241af10d', title: 'PATENT_TITLE_3640' },
        { id: 'e4b9a434-7ff0-4a9f-b760-7d7565b5aabf', title: 'PATENT_TITLE_8443' },
        { id: '38bc9cf8-26f4-4582-b6c9-05609eda204b', title: 'PATENT_TITLE_7429' },
        { id: '409dd3b7-9dda-4086-b6ed-a300eb828670', title: 'PATENT_TITLE_3600' },
        { id: '9a6a311b-e2b7-4543-b8e6-ff8dd0f0c02f', title: 'PATENT_TITLE_6988' },
        { id: 'e1cc05ce-74b3-4a17-be1a-b115b8193fdf', title: 'PATENT_TITLE_3361' },
        { id: '97e4c890-8806-4531-b25b-724397f56c46', title: 'PATENT_TITLE_3575' },
        { id: '29fbf8a5-b529-44da-87fa-523ee228004e', title: 'PATENT_TITLE_5274' },
        { id: 'a6987e82-9343-4dcb-b2dc-93a006407b35', title: 'PATENT_TITLE_6807' },
        { id: '3c8f3deb-14be-4b87-a210-b6e0479bf173', title: 'PATENT_TITLE_3250' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App