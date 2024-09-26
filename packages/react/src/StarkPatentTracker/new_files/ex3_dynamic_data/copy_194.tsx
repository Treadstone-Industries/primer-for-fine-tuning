import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0e1721a8-ed53-4590-9077-ccbfdcd1fbc2', title: 'PATENT_TITLE_5126' },
        { id: '8bbc0caa-4d98-4d45-8298-a855b690bf4c', title: 'PATENT_TITLE_2932' },
        { id: 'f03e762f-32ca-4f48-8493-01d5fe44095b', title: 'PATENT_TITLE_6646' },
        { id: '448370ea-e3e7-4ca0-a67d-d188e1e28d8d', title: 'PATENT_TITLE_2730' },
        { id: 'e345f4f1-e2a6-4b70-9735-57ba129778ff', title: 'PATENT_TITLE_2493' },
        { id: 'f6da6a89-2c91-45e1-be75-737ee82dfc47', title: 'PATENT_TITLE_9544' },
        { id: '72931997-0469-468e-9147-a4caf97c9142', title: 'PATENT_TITLE_5341' },
        { id: 'ffa46f47-2771-4293-bb03-260ac3e0213e', title: 'PATENT_TITLE_3400' },
        { id: '885da534-3eeb-4b9b-b3e8-4db8dd4040ff', title: 'PATENT_TITLE_2565' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App