import { createRoot } from 'react-dom/client';
import LitHeader from './Components/LitHeader';
import LitSelect from './Components/LitSelect/index.js';

const App = () => {
    return (
        <>
            <LitHeader></LitHeader>
            <LitHeader title="Not default"></LitHeader>
            <LitSelect options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
            ]} onChange={(e) => alert(e?.detail?.value)}></LitSelect>
        </>
    )
}

const root = createRoot(document.getElementById('app')!);

root.render(<App />);