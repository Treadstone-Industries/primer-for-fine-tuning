import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2d7971e9-7506-4cf8-861c-9f4ec9daa03b', title: 'PATENT_TITLE_4308' },
        { id: '60f10a00-a16a-4f4b-a97c-de4dc7509da8', title: 'PATENT_TITLE_2742' },
        { id: 'a7838eb5-77d4-43c1-bfb3-b7e90baf36cb', title: 'PATENT_TITLE_1217' },
        { id: '15aff527-04f3-4cb8-81ed-d65437325a32', title: 'PATENT_TITLE_4733' },
        { id: '5a1ff4f4-a625-45b8-9382-487b37245200', title: 'PATENT_TITLE_8776' },
        { id: 'eba3a44f-a1a4-4813-8b81-5cec3a610a23', title: 'PATENT_TITLE_4617' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App