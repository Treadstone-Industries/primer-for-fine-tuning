import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'da46fc09-191a-457c-bd1d-2e6328a90446', title: 'PATENT_TITLE_4902' },
        { id: '62ad963e-e4e5-4289-adc6-141ff730dc1e', title: 'PATENT_TITLE_3001' },
        { id: '794a0bc1-caf8-4b7f-9a9f-435ea115482b', title: 'PATENT_TITLE_5630' },
        { id: '2b424757-1668-4935-a68a-104a8161d65a', title: 'PATENT_TITLE_9700' },
        { id: '388edcca-d693-45b1-b147-a416c218fd64', title: 'PATENT_TITLE_1437' },
        { id: '78cf7fea-ac73-465a-be53-4603a87bd235', title: 'PATENT_TITLE_9710' },
        { id: 'f970f80f-7202-457c-8c12-7b8ce2417804', title: 'PATENT_TITLE_3142' },
        { id: '50651f9a-72dd-4590-a5cc-8f7c73eb6b30', title: 'PATENT_TITLE_7726' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App