import {render,screen} from '@testing-library/react'
import App from '../App'
import {expect,describe,it} from 'vitest'
import {HashRouter,MemoryRouter} from 'react-router-dom'


const renderWithRouter = (ui, { route = '/', ...renderOptions } = {}) => {
    return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>, renderOptions);
  };

const MockApp=()=>{
    return(
        <HashRouter>
            <App />
        </HashRouter>
    )
    
}

describe('App.jsx',()=>{
    it('a projekt létrejött',()=>{
        render(<MockApp/>)
        expect(document.getElementById('app')).toBeInTheDocument()
    })

    it('about route létrejött', () => {
        renderWithRouter(<App />, { route: '/about' });
        const titleElement=screen.getByText(/Welcome to Our Store/i)
        expect(titleElement).toBeInTheDocument(); 
      });

})