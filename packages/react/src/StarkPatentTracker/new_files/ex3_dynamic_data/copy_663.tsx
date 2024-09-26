import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f8b3e461-481e-4cbd-a13d-9acceee36f37', title: 'PATENT_TITLE_4500' },
        { id: '39bee760-4db1-4913-a021-522cf064468b', title: 'PATENT_TITLE_5330' },
        { id: '3eefbbd6-9d86-49ef-9064-6ff0b9c08996', title: 'PATENT_TITLE_1543' },
        { id: '9acf1de3-28bc-4d78-ae7b-4f3e5042a650', title: 'PATENT_TITLE_7250' },
        { id: '26fd5339-052c-47c7-b994-09a51bb5c2c5', title: 'PATENT_TITLE_5423' },
        { id: 'e72694d5-8b48-4fdc-9b3d-a1e0cc4dfb3e', title: 'PATENT_TITLE_3163' },
        { id: '3a50aa92-a5de-4fa7-8519-7d9675725222', title: 'PATENT_TITLE_2814' },
        { id: '9bea8458-1a7d-4a50-bae9-cbad8885ea07', title: 'PATENT_TITLE_9057' },
        { id: '9162e4f7-6123-4412-91a7-113f9d622182', title: 'PATENT_TITLE_9370' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App