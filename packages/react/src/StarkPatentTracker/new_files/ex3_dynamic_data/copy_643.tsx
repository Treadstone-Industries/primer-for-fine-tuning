import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '15b5a910-84e8-4078-af58-759b501240a2', title: 'PATENT_TITLE_6478' },
        { id: 'f697cc3d-23ea-428b-965e-90306ca9ff04', title: 'PATENT_TITLE_3788' },
        { id: '394a90ba-7b64-4b49-b911-6c8fa803c49d', title: 'PATENT_TITLE_4606' },
        { id: '37534c8b-b93a-4f22-9a5e-65280d2dec79', title: 'PATENT_TITLE_9953' },
        { id: '8553b50c-ed58-4600-b825-c425f3114a0f', title: 'PATENT_TITLE_3344' },
        { id: 'fb1384ad-ce9f-4468-9db7-f40909258166', title: 'PATENT_TITLE_6181' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App