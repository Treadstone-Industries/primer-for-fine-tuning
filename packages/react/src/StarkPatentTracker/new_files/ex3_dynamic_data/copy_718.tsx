import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2edeb374-e8ff-4dc2-9a81-863faaf73461', title: 'PATENT_TITLE_6050' },
        { id: '54a81682-0b69-4df5-b90d-6eb9b09a6952', title: 'PATENT_TITLE_7622' },
        { id: '0def4130-5ad9-4ab3-96bd-1d54a628fbd2', title: 'PATENT_TITLE_9271' },
        { id: 'c950e872-df26-4151-b39c-08d97a59371f', title: 'PATENT_TITLE_1201' },
        { id: '57f67947-9d26-4ce8-b546-00520499b6f3', title: 'PATENT_TITLE_8424' },
        { id: '4c82b70e-eb6f-4ecb-8a53-5a7cc082f74a', title: 'PATENT_TITLE_2212' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App