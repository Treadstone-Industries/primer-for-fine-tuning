import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '291a44e9-b5a0-4026-99e5-0199476c8f77', title: 'PATENT_TITLE_8697' },
        { id: '7d703ccb-c1e8-4357-8fea-44d6532160de', title: 'PATENT_TITLE_7844' },
        { id: 'dd13707c-81cb-492b-bdd7-dd7a7bbd8528', title: 'PATENT_TITLE_8331' },
        { id: '3f7dbce4-95f3-4c3b-b44b-5e141deb33fa', title: 'PATENT_TITLE_8892' },
        { id: '242786db-524e-496b-9b72-6343f91dfd44', title: 'PATENT_TITLE_1026' },
        { id: 'a4791e2d-a8b4-4254-85ea-18df1a25b364', title: 'PATENT_TITLE_4180' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App