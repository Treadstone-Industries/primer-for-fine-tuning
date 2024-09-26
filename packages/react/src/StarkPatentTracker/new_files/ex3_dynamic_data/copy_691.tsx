import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c519a313-44ae-4e6d-9654-d11a38784655', title: 'PATENT_TITLE_5568' },
        { id: '4be800b9-1dcb-45fc-ac8f-1f3b600882ff', title: 'PATENT_TITLE_4891' },
        { id: 'c161b37b-c504-41d5-8646-b87f0ce08db2', title: 'PATENT_TITLE_8317' },
        { id: '519b1ba1-c916-4603-9649-d20d4c8256fe', title: 'PATENT_TITLE_4218' },
        { id: 'aaa1a66a-b922-4a00-b99f-457c96c3e4b5', title: 'PATENT_TITLE_2383' },
        { id: '9cf040fd-0d25-4523-807c-3a8461f6048f', title: 'PATENT_TITLE_4152' },
        { id: 'fe630157-f17a-4d91-a823-d6b8d5b2aebd', title: 'PATENT_TITLE_7170' },
        { id: 'fd4fe5e9-fe75-4146-a7f4-9c3e36c1e884', title: 'PATENT_TITLE_9644' },
        { id: 'a634f1c6-2f73-49cb-ae79-2195ff424676', title: 'PATENT_TITLE_4779' },
        { id: '8ac983cf-27b0-483d-9de1-88a68c7ac50f', title: 'PATENT_TITLE_3264' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App