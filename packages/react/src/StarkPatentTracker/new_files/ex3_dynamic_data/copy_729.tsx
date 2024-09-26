import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a49e27be-dd4e-4562-8161-9c3fcbe36999', title: 'PATENT_TITLE_4306' },
        { id: '0663451c-0b78-47b4-b3e0-e419bd05c3fb', title: 'PATENT_TITLE_5249' },
        { id: '8baf9bf2-b127-4fd7-8972-344f5146f052', title: 'PATENT_TITLE_2645' },
        { id: '6c1a0fe2-94cb-41e8-810b-97d6c79a7f24', title: 'PATENT_TITLE_4342' },
        { id: 'd40d004f-d849-42eb-80d2-9bd26d49ce57', title: 'PATENT_TITLE_6954' },
        { id: '0fa4debd-4a7a-4880-b777-ff5dd6603419', title: 'PATENT_TITLE_5370' },
        { id: '74224435-5862-4109-b9fe-a50d525a2324', title: 'PATENT_TITLE_4382' },
        { id: '87c14473-4ead-4814-9cfe-adef7d5a672d', title: 'PATENT_TITLE_1377' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App