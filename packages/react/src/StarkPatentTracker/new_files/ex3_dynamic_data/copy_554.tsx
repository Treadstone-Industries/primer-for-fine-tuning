import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '284e9f54-b8c5-40e1-ab1c-6de3617e1acd', title: 'PATENT_TITLE_8039' },
        { id: '263cf359-2381-4ad9-9aa5-41cc6cd06199', title: 'PATENT_TITLE_8476' },
        { id: '96777638-8236-4b13-9967-dbca27aeedbe', title: 'PATENT_TITLE_1943' },
        { id: '615ba6c2-117e-4345-adc1-8598e276e8f1', title: 'PATENT_TITLE_8467' },
        { id: '934af055-2268-4565-a1da-dc89bc29d15c', title: 'PATENT_TITLE_6512' },
        { id: 'eb498476-e1ff-48ac-b283-01fee13a5d30', title: 'PATENT_TITLE_3917' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App