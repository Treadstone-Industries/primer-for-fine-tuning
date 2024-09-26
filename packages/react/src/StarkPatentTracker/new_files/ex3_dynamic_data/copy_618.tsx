import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6d6cc6ea-5122-43c2-abe7-78e16e827437', title: 'PATENT_TITLE_1361' },
        { id: '5bcba4d4-c5f9-4928-8a5a-fc3b8ef1e02f', title: 'PATENT_TITLE_1082' },
        { id: '7921a120-9078-4c15-a19c-562ab35fe793', title: 'PATENT_TITLE_8816' },
        { id: '7b27995f-74b6-43e4-94fd-7f65c1f34473', title: 'PATENT_TITLE_9510' },
        { id: 'db27cb81-0a29-4e75-afd6-66f3b1a9282c', title: 'PATENT_TITLE_2311' },
        { id: '7804b405-2313-4a7b-b774-5144f28b808c', title: 'PATENT_TITLE_9957' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App