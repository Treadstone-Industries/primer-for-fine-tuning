import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2f9ad71e-c4f9-4878-9b10-dfa0942dcd7d', title: 'PATENT_TITLE_8131' },
            { id: '77033491-a614-4b81-91aa-7c627d0934ba', title: 'PATENT_TITLE_6909' },
            { id: 'fc03c231-3953-43f6-a3e9-acf302fa0c82', title: 'PATENT_TITLE_6360' },
            { id: '2835bc97-8c66-480b-9259-47437d7f7f0d', title: 'PATENT_TITLE_2417' },
            { id: '740667f4-0db8-4977-9910-51b1b85a36d9', title: 'PATENT_TITLE_1013' },
            { id: 'e50cb2cd-7308-4cd5-b144-eea9f57f4e37', title: 'PATENT_TITLE_5190' },
            { id: '7ccd8dc0-4d28-4e81-85d3-2cb47ce379e7', title: 'PATENT_TITLE_4872' },
        ]}
    />
)

export default App