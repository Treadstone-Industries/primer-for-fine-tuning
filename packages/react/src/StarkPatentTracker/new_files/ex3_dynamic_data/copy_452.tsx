import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b8026cea-7838-4578-84c3-57c9daa08fcb', title: 'PATENT_TITLE_2375' },
        { id: '8829ef69-5cab-4e7f-b29a-b057190bd772', title: 'PATENT_TITLE_8863' },
        { id: '13981faf-1752-4643-b7ec-e52fed017765', title: 'PATENT_TITLE_5910' },
        { id: 'fe3bc31e-958b-4953-ab10-2c4a0a27e05a', title: 'PATENT_TITLE_2130' },
        { id: 'c98dc3f1-3421-4057-a819-da3fa28251c6', title: 'PATENT_TITLE_4656' },
        { id: '96700242-656b-4493-9f0d-e8f99a14a6bd', title: 'PATENT_TITLE_9461' },
        { id: '94601002-3eea-48cb-8946-a754b011039a', title: 'PATENT_TITLE_7076' },
        { id: '855d12f7-8dba-4adc-ba68-38e0ed06345e', title: 'PATENT_TITLE_5367' },
        { id: '332f64e1-1e5b-4042-a8a3-b340c24bcb95', title: 'PATENT_TITLE_9434' },
        { id: '5966d7ca-3b5c-4eab-9444-0e6cea6898e6', title: 'PATENT_TITLE_3289' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App