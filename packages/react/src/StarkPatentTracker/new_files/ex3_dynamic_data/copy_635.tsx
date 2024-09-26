import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a4f6024d-6f02-4aeb-9eb8-44f7fbedf48e', title: 'PATENT_TITLE_9813' },
        { id: '5ac4fa56-d8cc-4838-8c56-79b28098bcbb', title: 'PATENT_TITLE_3194' },
        { id: '6f6779ff-cd17-4955-b3dc-39300d9983b7', title: 'PATENT_TITLE_8758' },
        { id: 'b8b24d4c-7b11-4ce8-9876-261072cea0d7', title: 'PATENT_TITLE_4402' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App