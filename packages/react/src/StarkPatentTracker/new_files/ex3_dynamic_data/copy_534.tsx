import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c47dc9c3-5037-49b2-b722-8894e2ef733a', title: 'PATENT_TITLE_8102' },
        { id: '9cea32dd-886a-4f11-905a-5fab260cb227', title: 'PATENT_TITLE_9450' },
        { id: '1aa92af6-1541-4689-929b-01f612a44ca1', title: 'PATENT_TITLE_9618' },
        { id: 'a168fe13-eed0-488d-9301-bc3f546545cd', title: 'PATENT_TITLE_7717' },
        { id: 'e3cbaafc-ee93-4454-988b-d6e9b91352e2', title: 'PATENT_TITLE_7529' },
        { id: 'e7c2df2c-99c7-46c3-a47d-dd64979c99d7', title: 'PATENT_TITLE_4719' },
        { id: '6c3c9c1a-49e5-4f83-8961-ce39fba88773', title: 'PATENT_TITLE_7546' },
        { id: 'cb481c7d-afc6-4298-8352-4d494d95e9ce', title: 'PATENT_TITLE_5124' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App