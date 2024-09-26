import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '89419a88-2477-415a-8b17-9621d6967c92', title: 'PATENT_TITLE_3900' },
            { id: 'c95083f3-14aa-453d-a207-a959bb17b119', title: 'PATENT_TITLE_2829' },
            { id: '7b1cc0f1-bd1c-4186-a08f-5e0c8b74d4ca', title: 'PATENT_TITLE_6195' },
            { id: '69d59c7f-9a37-4436-8bda-4e8aa930d4e0', title: 'PATENT_TITLE_2028' },
            { id: 'f6c45f37-6b61-455d-ab6e-466319e68236', title: 'PATENT_TITLE_4738' },
            { id: '4f7aea31-93cf-43aa-a8e2-97e94e80933b', title: 'PATENT_TITLE_7743' },
            { id: '862651d1-b48f-444b-95e3-2e4657eff637', title: 'PATENT_TITLE_7203' },
        ]}
    />
)

export default App