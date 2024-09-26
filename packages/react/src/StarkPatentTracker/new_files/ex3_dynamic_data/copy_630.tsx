import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3746334c-7e61-4fc9-8e81-ec583c71478a', title: 'PATENT_TITLE_2954' },
        { id: 'a61d6ac3-4593-4b7c-a1f0-2412d67ec2e7', title: 'PATENT_TITLE_3051' },
        { id: '1a34a63f-6f88-4641-92b7-1c63ad80bb9e', title: 'PATENT_TITLE_4944' },
        { id: '01b5f3ee-5a82-49d8-8c2c-8a2ddea45958', title: 'PATENT_TITLE_5018' },
        { id: '3cc6b88e-2ea1-49ef-9c22-20a275edf1ff', title: 'PATENT_TITLE_8591' },
        { id: '43da3050-bdd6-4e80-8418-8c2ae1caeb3b', title: 'PATENT_TITLE_9943' },
        { id: '7cf7029a-bf16-4801-8c42-5396505700dd', title: 'PATENT_TITLE_6080' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App