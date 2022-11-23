import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import StarWarsProvider from '../context/StarWarsProvider'
import userEvent from '@testing-library/user-event';

describe('Teste do projeto Star Wars Planets', () => {

  it('verifica se tem um input pesquisar na tela', () => {
    render(<StarWarsProvider >
            <App />
          </StarWarsProvider> )

    const nameFilter = 'name-filter';
    const inputName = screen.getByTestId(nameFilter)
    expect(inputName).toBeInTheDocument();
  })
  it('Verificar se o botão filtrar', () => {
    render(<StarWarsProvider >
            <App />
          </StarWarsProvider> )

    const buttonFilter = screen.getByTestId('button-filter');
    expect(buttonFilter).toBeInTheDocument();
  })

  it('verificar se o botão filtrar funciona', () => {
    render(<StarWarsProvider >
      <App />
    </StarWarsProvider> )

    const buttonFilter = screen.getByTestId('button-filter');
    userEvent.click(buttonFilter);
    const texte = screen.getByText('population maior que')
    expect(texte).toHaveTextContent('population maior que')
  })

  it('verifica se tem uma tabela ', async () => {
    render(<StarWarsProvider >
            <App />
          </StarWarsProvider> )

    expect(screen.getAllByRole("columnheader")).toHaveLength(13);
 
  })

  it('veririfca se tem na tabela o valor Tatooine', async () => {
    render(<StarWarsProvider >
           <App />
           </StarWarsProvider> )
           
    setTimeout(() => {
      const tatooine = screen.getByText(/tatoine/i)
      expect(tatooine).toBeInTheDocument()
      }, 4000)
      
    })

})