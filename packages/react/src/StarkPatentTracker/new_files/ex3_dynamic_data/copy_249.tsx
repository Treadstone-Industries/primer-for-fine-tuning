import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9c107755-d875-4396-88fc-15d032b5344d', title: 'PATENT_TITLE_1617' },
        { id: '5fc51195-d6fa-46ed-a81c-bf43f9b4b430', title: 'PATENT_TITLE_2947' },
        { id: 'b9b42427-1027-483b-ad08-85601dfa6727', title: 'PATENT_TITLE_2722' },
        { id: '955936cf-135b-4c7a-bd03-96d091fe6b19', title: 'PATENT_TITLE_6351' },
        { id: '152e5053-3ec1-42a7-92ba-a267152ed558', title: 'PATENT_TITLE_8446' },
        { id: 'c8b1de4c-1215-43f8-a261-bc02f6c4b9d0', title: 'PATENT_TITLE_3235' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App