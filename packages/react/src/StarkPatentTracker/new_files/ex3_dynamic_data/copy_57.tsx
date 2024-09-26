import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cc567657-8ab6-4e8e-b668-b4bcf97d7d2c', title: 'PATENT_TITLE_9878' },
        { id: '04996ce1-8801-4d01-9ec3-2902e38b4a16', title: 'PATENT_TITLE_5347' },
        { id: 'ce52378c-dca6-4a08-ad7e-7bc997bc1d23', title: 'PATENT_TITLE_3567' },
        { id: '0148c803-17ae-4f90-8140-ebfe93e1a550', title: 'PATENT_TITLE_3308' },
        { id: '7f3c047f-5edc-4aa1-9b09-8343f995b31a', title: 'PATENT_TITLE_2382' },
        { id: '88bd01ac-7050-4380-a858-716483aa9a4f', title: 'PATENT_TITLE_1087' },
        { id: '2fbe092a-8d29-41ce-af80-182681965937', title: 'PATENT_TITLE_9411' },
        { id: 'd00fd5ea-f4aa-4751-853c-7f10b7f2e0d1', title: 'PATENT_TITLE_1507' },
        { id: 'f7b9fe6e-8ab2-401f-8a46-36e69b0a03ab', title: 'PATENT_TITLE_4445' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App