import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1e2f3e4d-98ae-42ae-aeeb-98a119b3869e', title: 'PATENT_TITLE_9704' },
        { id: 'a4566ad1-6980-4d5e-947b-fe29dc7ea3e8', title: 'PATENT_TITLE_9320' },
        { id: '7e614ee2-5f60-401a-8b58-88710e2cece7', title: 'PATENT_TITLE_7824' },
        { id: '93da95c8-68fe-4d21-9289-0f9bbc28f586', title: 'PATENT_TITLE_8195' },
        { id: 'fd1d4437-a3fc-4d19-8c42-887ca2ef49ef', title: 'PATENT_TITLE_3111' },
        { id: '4a141f2e-8d66-4917-92aa-8cb76bc4d9bc', title: 'PATENT_TITLE_6716' },
        { id: '9d84be35-4abc-4323-8998-28f205bfd269', title: 'PATENT_TITLE_8155' },
        { id: 'eec4df4b-1253-4d50-b19d-a5f543269cdd', title: 'PATENT_TITLE_5005' },
        { id: '1ae36c5d-132f-4097-896d-b91ced7b8375', title: 'PATENT_TITLE_2041' },
        { id: '3f35918d-033f-480e-a899-6324110d016d', title: 'PATENT_TITLE_8624' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App