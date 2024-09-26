import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '409adca6-5805-4970-8907-ca27303693f5', title: 'PATENT_TITLE_6555' },
        { id: 'd10f7b85-5f55-4822-8926-1c7ec8acaafa', title: 'PATENT_TITLE_8323' },
        { id: '9041cf3a-57a9-41f3-89ff-0ca50493dbba', title: 'PATENT_TITLE_6917' },
        { id: '6353d957-f15d-4cd4-ae8e-adfead5d4f3c', title: 'PATENT_TITLE_2021' },
        { id: 'a7c1acbb-f457-4647-89d5-86ba061aeed2', title: 'PATENT_TITLE_1713' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App