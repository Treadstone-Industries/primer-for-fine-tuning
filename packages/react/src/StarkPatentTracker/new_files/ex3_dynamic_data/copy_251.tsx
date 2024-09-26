import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '852ae77d-218f-4ca6-9fa1-e66b97e47bfe', title: 'PATENT_TITLE_7228' },
        { id: '8e52579d-7f93-44d6-9414-7a0a96499eb6', title: 'PATENT_TITLE_6404' },
        { id: '20539049-3b7e-4a2c-9bd0-8b525e954ac5', title: 'PATENT_TITLE_6860' },
        { id: '5c538d89-bfed-4997-818f-5c0baa4b036e', title: 'PATENT_TITLE_4470' },
        { id: '6d8050dd-8e5b-4069-a2aa-db9cf5be23ce', title: 'PATENT_TITLE_6487' },
        { id: '525b77e1-6aa9-465d-b589-4e3fa9d1fe4a', title: 'PATENT_TITLE_7931' },
        { id: '55dfa9c5-cafc-4078-a9c5-0a7f8a1c2ea4', title: 'PATENT_TITLE_3166' },
        { id: 'c19092a7-d765-4112-ba2e-92bcb2be1fce', title: 'PATENT_TITLE_6704' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App