import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8a08285a-20d5-402a-b555-b7140899bb79', title: 'PATENT_TITLE_1531' },
        { id: '16b6cef3-9f40-48b3-b00a-33befd43d02d', title: 'PATENT_TITLE_9670' },
        { id: '4259dded-160f-4e33-b1ef-81d7e84cc243', title: 'PATENT_TITLE_1633' },
        { id: 'b9c464c4-6e68-469e-8729-78d531838039', title: 'PATENT_TITLE_3774' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App