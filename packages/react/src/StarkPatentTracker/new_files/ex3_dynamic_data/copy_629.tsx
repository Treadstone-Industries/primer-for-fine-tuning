import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e733a39d-8dd3-43c9-a991-9e18573ac6bb', title: 'PATENT_TITLE_4306' },
        { id: '9da3e524-8026-4ad0-b9e2-57d9caa87478', title: 'PATENT_TITLE_1407' },
        { id: 'd7e5c680-b776-4703-9f7b-71044ea2f6c8', title: 'PATENT_TITLE_4347' },
        { id: 'be1a0645-ed4c-4e67-be81-bc8b6f2fa2ef', title: 'PATENT_TITLE_9866' },
        { id: '6f72d33c-cd0d-4799-920b-5f5f88b63a70', title: 'PATENT_TITLE_4441' },
        { id: 'c6767b2b-f285-4037-bcd6-650d0e6e4e70', title: 'PATENT_TITLE_2036' },
        { id: 'cdc40806-54d0-4e62-82eb-4bcab0a7878e', title: 'PATENT_TITLE_2935' },
        { id: 'af77033c-84f5-4d88-8d89-d8576ce2da06', title: 'PATENT_TITLE_6977' },
        { id: '04e2a32f-40df-4211-9666-8c83ddc8fd38', title: 'PATENT_TITLE_4297' },
        { id: '51d77dd3-76a7-4015-8aee-5a36dab5975a', title: 'PATENT_TITLE_6083' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App