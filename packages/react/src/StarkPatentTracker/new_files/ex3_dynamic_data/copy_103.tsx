import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f7c0355e-34e0-4b2c-8932-ccecf2143bad', title: 'PATENT_TITLE_7487' },
        { id: '8a504fd5-4fc8-4b03-9c5a-78c90507616f', title: 'PATENT_TITLE_6561' },
        { id: 'db999a6f-a30b-43e9-a89f-1b9b65422a9f', title: 'PATENT_TITLE_6904' },
        { id: 'ffcc3ca0-e1d0-482e-a5ff-beac4678171a', title: 'PATENT_TITLE_7636' },
        { id: '47d8b64a-6a4f-42b9-9ed0-8aaa8482a4cd', title: 'PATENT_TITLE_7856' },
        { id: '30a0a42f-2ff1-463c-aec9-a88ae4fd3cac', title: 'PATENT_TITLE_7934' },
        { id: 'a00d1850-c2d7-463d-bc0c-8e299c282e68', title: 'PATENT_TITLE_7089' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App