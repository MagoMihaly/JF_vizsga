import {render,screen} from '@testing-library/react'
import {About} from '../components/About'
import {expect,describe,it} from 'vitest'


describe('About.jsx',()=>{
    
    it('About.jsx komponens létrejött', () => {
        render(<About />)
       const titleElement=screen.getByRole('heading', { name: 'Welcome to Our Store!' })
        expect(titleElement).toBeInTheDocument();
      });
      it('a címsorok száma 4', () => {
        render(<About />)
       const titleElements=screen.getAllByRole('heading')
        expect(titleElements.length).toBe(4)
      });
      it('az image elemek száma 2',()=>{
        render(<About />)
        const images=document.querySelectorAll('img')
        expect(images.length).toBe(2)

      })
      it('a megfelelő képek vannak megjelenítve',()=>{
        render(<About />)
        const images=document.querySelectorAll('img')
        images.forEach(image=>
                   expect(image.src).toContain('about')
            )
 

      })
})
