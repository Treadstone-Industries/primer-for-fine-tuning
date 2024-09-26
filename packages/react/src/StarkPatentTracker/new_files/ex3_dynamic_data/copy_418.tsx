import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2b2f153c-4384-448f-b98c-d339fdb023d6', title: 'PATENT_TITLE_1098' },
        { id: 'fb3ddcb9-759f-449f-ab3c-75240da0ea10', title: 'PATENT_TITLE_1232' },
        { id: '043c2e99-85f2-4880-b9ea-17287615148e', title: 'PATENT_TITLE_2504' },
        { id: 'f7e69271-1830-463b-a3eb-dc89e477973c', title: 'PATENT_TITLE_8783' },
        { id: '8dbf9396-7ae3-4e7e-bc80-fdec657d581b', title: 'PATENT_TITLE_1509' },
        { id: '5f326b2f-52a1-47c3-adb2-955b14978448', title: 'PATENT_TITLE_9473' },
        { id: 'c8fb855d-8c34-4e04-b2b2-b382e21b1435', title: 'PATENT_TITLE_3323' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App