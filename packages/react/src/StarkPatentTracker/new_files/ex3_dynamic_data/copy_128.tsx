import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4c09ecba-b675-4a9d-a061-7b809f8fcb24', title: 'PATENT_TITLE_9616' },
        { id: '9f8619f1-6f12-470b-b361-b1c2ff486e8a', title: 'PATENT_TITLE_6420' },
        { id: '5ba42219-6374-449a-a184-2c57b198929c', title: 'PATENT_TITLE_1458' },
        { id: 'bee6ab93-d17f-4cd3-8936-abf07bfc0598', title: 'PATENT_TITLE_5472' },
        { id: '88b2f0f3-5a60-4789-9ca2-c8cc7ca309c1', title: 'PATENT_TITLE_8181' },
        { id: '00e74d18-cd01-4996-b6d4-1a61a1d08453', title: 'PATENT_TITLE_8225' },
        { id: 'e7629588-7f0b-49f7-9820-69695c0a4813', title: 'PATENT_TITLE_7573' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App