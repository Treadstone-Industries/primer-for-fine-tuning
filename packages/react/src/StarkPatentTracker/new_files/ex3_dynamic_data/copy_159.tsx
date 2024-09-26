import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '09650d5e-7ba5-4229-b065-7c56854ec099', title: 'PATENT_TITLE_6526' },
        { id: 'a8930a25-a890-4187-a116-9063a1261325', title: 'PATENT_TITLE_3156' },
        { id: 'f84b6c6a-e98b-44ae-b027-4087e9bcfd03', title: 'PATENT_TITLE_7073' },
        { id: '0d30511d-095f-4052-a31b-38690850951f', title: 'PATENT_TITLE_3829' },
        { id: '98ead144-5f59-42e8-8daa-4492be72c265', title: 'PATENT_TITLE_6748' },
        { id: '674a1248-053a-4519-ae4a-f49225db9d50', title: 'PATENT_TITLE_9134' },
        { id: '14f1437a-92d2-42b4-a7fb-db48c6cbfee1', title: 'PATENT_TITLE_9895' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App