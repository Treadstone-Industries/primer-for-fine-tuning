import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '892d27f2-2deb-46d9-b686-7fd93d8acb38', title: 'PATENT_TITLE_4578' },
        { id: 'cc0f4c1a-9265-4260-a70a-f3e8f5c5ab8a', title: 'PATENT_TITLE_5643' },
        { id: '82ee430f-786a-48bb-b799-3d26c5376969', title: 'PATENT_TITLE_4256' },
        { id: '1209f109-0e94-4e70-8a62-8294f15a550f', title: 'PATENT_TITLE_6673' },
        { id: 'bac1e980-62fe-45d0-ab1f-65ecdbcfa144', title: 'PATENT_TITLE_1671' },
        { id: 'bbba79af-00b4-4b44-aa37-589b974c353f', title: 'PATENT_TITLE_5777' },
        { id: 'de998a10-6992-4dcf-be37-6baa4de260b9', title: 'PATENT_TITLE_8490' },
        { id: '75ebf4e5-46fb-4a4c-9281-2309488299cf', title: 'PATENT_TITLE_4190' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App