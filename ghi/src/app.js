import { createRoot } from 'react-dom/client';


function Navigation() {
    return <h1> Sup bitches </h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);