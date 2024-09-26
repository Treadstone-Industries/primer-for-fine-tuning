import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a0ccd8a9-4cd5-42b5-99b8-75bbf4b5b0fd', title: 'PATENT_TITLE_2423' },
        { id: '5bd6b159-2493-48cb-a114-2f14e9b9346a', title: 'PATENT_TITLE_5175' },
        { id: 'c441b50d-1473-4ea8-a57e-17850bc75f6f', title: 'PATENT_TITLE_5109' },
        { id: '96618e5c-519f-4853-8eb3-60b66277ae38', title: 'PATENT_TITLE_4938' },
        { id: 'c0b00dce-654f-45fd-a24a-55e6c922271a', title: 'PATENT_TITLE_3322' },
        { id: '347495b7-563f-4a72-b7c1-d03fe2011fc1', title: 'PATENT_TITLE_5967' },
        { id: 'abd40153-b5e1-45e1-add7-345b6d54dc04', title: 'PATENT_TITLE_9390' },
        { id: 'e988e949-1b99-4caa-951a-a914804b105c', title: 'PATENT_TITLE_8950' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App