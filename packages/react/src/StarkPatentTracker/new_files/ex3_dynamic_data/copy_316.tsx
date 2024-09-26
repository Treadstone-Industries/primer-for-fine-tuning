import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '687619ea-e240-4289-b7ad-efbaf0c431c2', title: 'PATENT_TITLE_1619' },
        { id: 'ec8ab135-4b85-4e09-b011-9ce2f7170b8a', title: 'PATENT_TITLE_1625' },
        { id: '066bb672-9b6e-44c0-902b-b9738cb94773', title: 'PATENT_TITLE_9533' },
        { id: '076d620b-a343-449a-9b27-0d7018c11e4c', title: 'PATENT_TITLE_3481' },
        { id: '36ed419c-e59f-4e18-beef-207f1803a4cc', title: 'PATENT_TITLE_8604' },
        { id: 'dd19ccc8-ab3f-4b55-b1ff-d23cb860294d', title: 'PATENT_TITLE_8751' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App