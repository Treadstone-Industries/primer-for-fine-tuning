import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '87e5366c-ea23-4c27-a2cc-f308ed4db483', title: 'PATENT_TITLE_3555' },
        { id: '533185e8-93cc-4085-b4c0-06f2c2105a71', title: 'PATENT_TITLE_1230' },
        { id: '4cc22ee3-7ca4-470e-acd1-870402034669', title: 'PATENT_TITLE_6448' },
        { id: '7a642552-5e25-4158-9736-457e2c61b5b0', title: 'PATENT_TITLE_5378' },
        { id: 'dd09388d-4241-4cb7-8d69-7ffc79833275', title: 'PATENT_TITLE_1724' },
        { id: 'b78fe8c7-ab3a-435e-bfca-ef41b8165e59', title: 'PATENT_TITLE_6516' },
        { id: '64b3c6b7-952d-4f32-b71e-160ae980af6c', title: 'PATENT_TITLE_7681' },
        { id: 'ec28e93f-4b91-41fc-9f92-a863328bddcf', title: 'PATENT_TITLE_9724' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App