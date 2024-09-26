import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '29a5b100-be33-4c5a-ad8d-60d067cf84e6', title: 'PATENT_TITLE_2190' },
        { id: '6f083f15-9cea-468d-9d28-2384970f3865', title: 'PATENT_TITLE_6843' },
        { id: 'c038a41c-4512-4515-8013-88912be0699e', title: 'PATENT_TITLE_2265' },
        { id: '34d9ef33-ea57-435a-becf-057ccb4df049', title: 'PATENT_TITLE_7966' },
        { id: 'b6115fe6-58a1-4f1d-93f3-9dc45a5870ed', title: 'PATENT_TITLE_8936' },
        { id: '14179ad3-b256-48a5-aaed-5e3ca80c5150', title: 'PATENT_TITLE_8967' },
        { id: 'd39d17e5-ff11-4ceb-9c54-1dc1027b3c6f', title: 'PATENT_TITLE_8291' },
        { id: '902b245e-421f-4292-8b54-3f9b31c4cd6a', title: 'PATENT_TITLE_2517' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App