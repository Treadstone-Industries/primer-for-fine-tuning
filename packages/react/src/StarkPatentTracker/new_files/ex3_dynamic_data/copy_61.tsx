import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ead9daa6-fb53-40eb-ad79-d15e98611808', title: 'PATENT_TITLE_6214' },
        { id: '56c31a83-b3f6-4eaa-9f6f-45966c7ba23f', title: 'PATENT_TITLE_8073' },
        { id: 'f1b910b4-7597-4c51-ab67-59968ede5c08', title: 'PATENT_TITLE_1364' },
        { id: '6382297c-52df-4b4c-9011-16202d897398', title: 'PATENT_TITLE_8267' },
        { id: 'b9cbe1c0-6619-4bc3-8511-0d16b40985cd', title: 'PATENT_TITLE_3344' },
        { id: '17215753-9804-4469-b04b-7586b1d47727', title: 'PATENT_TITLE_3199' },
        { id: 'e7e24c53-ef2e-4d5b-9af2-c4aa9d8138fe', title: 'PATENT_TITLE_7819' },
        { id: '6ab990c4-2bcf-4767-8074-ffe3b4ac4815', title: 'PATENT_TITLE_5495' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App