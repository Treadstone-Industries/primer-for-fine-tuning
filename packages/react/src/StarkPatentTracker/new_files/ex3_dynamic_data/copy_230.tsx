import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a8db01c6-809b-4e66-bcd6-c9fc35430c17', title: 'PATENT_TITLE_2109' },
        { id: '6d9f9910-9aab-48a4-b0c7-63752bc51923', title: 'PATENT_TITLE_3282' },
        { id: 'e4850966-8f0b-4fc7-b958-ca047e829a0a', title: 'PATENT_TITLE_7152' },
        { id: '7a707851-d562-4a8a-b76a-2ebe2e412321', title: 'PATENT_TITLE_2257' },
        { id: '733401e2-1784-400b-af6a-7c5410c0ac55', title: 'PATENT_TITLE_5234' },
        { id: '68ec2de5-7e09-4df1-a6f8-00bc0e508e23', title: 'PATENT_TITLE_5979' },
        { id: 'fb361841-e3aa-488b-b7c4-55f63f79203b', title: 'PATENT_TITLE_1674' },
        { id: '0a5869ad-9526-4dae-ae15-dfc4afea08ff', title: 'PATENT_TITLE_5676' },
        { id: '70c30c60-4aca-4faa-bb71-dfa629e968f6', title: 'PATENT_TITLE_3211' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App