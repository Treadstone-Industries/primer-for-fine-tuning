import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8cd55d8c-8d5e-4b90-a47b-ec7cd1d59fb0', title: 'PATENT_TITLE_6240' },
        { id: '0182633c-d0a3-46bc-865b-d84b5c3b843f', title: 'PATENT_TITLE_2341' },
        { id: '9316195a-cbf6-4b9f-9972-0d18cdfb1805', title: 'PATENT_TITLE_7509' },
        { id: '7d43a1e8-6477-49dd-84e9-0caeef6142d6', title: 'PATENT_TITLE_1542' },
        { id: '5ab637b2-4b22-477a-90f3-1997055e4227', title: 'PATENT_TITLE_2277' },
        { id: '73843998-bcbb-419d-81b6-7065eac6620c', title: 'PATENT_TITLE_3835' },
        { id: '038dd977-5bac-4386-88ef-1dc70e3e475b', title: 'PATENT_TITLE_3399' },
        { id: '05501fad-72df-4712-9257-66c45a34a038', title: 'PATENT_TITLE_3871' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App