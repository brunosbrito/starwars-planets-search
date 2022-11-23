import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import StarWarsProvider from '../context/StarWarsProvider'

describe('Teste do projeto Star Wars Planets', () => {
  
  it('verifica se tem um input pesquisar na tela', () => {
    render(<StarWarsProvider >
            <App />
          </StarWarsProvider> )

    const nameFilter = 'name-filter';
    const inputName = screen.getByTestId(nameFilter)
    expect(inputName).toBeInTheDocument();
  })
})