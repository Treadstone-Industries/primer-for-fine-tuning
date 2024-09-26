import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '126b5986-0c08-4e79-81a1-2979531bdc27', title: 'PATENT_TITLE_6554' },
        { id: '9cb36cd4-21eb-49fd-b060-2e15124860cc', title: 'PATENT_TITLE_7899' },
        { id: '5c942f54-7a76-4033-aeb4-c45225fff5e9', title: 'PATENT_TITLE_2931' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App