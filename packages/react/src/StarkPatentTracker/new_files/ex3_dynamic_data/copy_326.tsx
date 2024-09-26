import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '447252ae-2b75-4296-bb64-ac9cae7ff5c8', title: 'PATENT_TITLE_3248' },
        { id: '21122d26-7563-433b-accc-036d7c536bda', title: 'PATENT_TITLE_5911' },
        { id: 'fc2ebc79-c1e5-4784-98a5-e5ac2fe871c2', title: 'PATENT_TITLE_9426' },
        { id: '1365306f-9219-41aa-a09e-a48b66a3b60f', title: 'PATENT_TITLE_7344' },
        { id: '06298ea8-e91f-4859-abe9-f0bd5f733c9a', title: 'PATENT_TITLE_1994' },
        { id: '840014d7-355a-418c-9515-01f9a193f096', title: 'PATENT_TITLE_4570' },
        { id: '34d17581-ad9a-4168-8219-1949c8accd80', title: 'PATENT_TITLE_6564' },
        { id: 'd33652e4-3a19-4f40-9ee5-9ab6c07fa6b8', title: 'PATENT_TITLE_7404' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App