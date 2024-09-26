import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9d2c8aa6-5a1a-42da-81be-8e05939d0397', title: 'PATENT_TITLE_6424' },
        { id: '73965e1e-dcb5-4867-8a0d-df6770f88f5b', title: 'PATENT_TITLE_2914' },
        { id: '40849932-6fb8-4580-ad05-5d6980e33212', title: 'PATENT_TITLE_7436' },
        { id: '6071a21d-5e7d-4b59-9ad4-e3fd26f6503d', title: 'PATENT_TITLE_6211' },
        { id: '6a89361e-7c7b-4eae-be94-926a08ce0f20', title: 'PATENT_TITLE_6399' },
        { id: 'fd9ffe10-055c-4bae-90e6-75ed773f2951', title: 'PATENT_TITLE_5853' },
        { id: 'b66064a8-8ac8-43a8-9d00-5869ed0453ff', title: 'PATENT_TITLE_4139' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App