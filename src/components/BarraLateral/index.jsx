import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 212px;
`




const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao 
            iconeAtivo="../../../public/icones/home-ativo.png" 
            iconeInativo="../../../public/icones/home-inativo.png"
            ativo={true}
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao 
            iconeAtivo="../../../public/icones/maisvistas-ativo.png" 
            iconeInativo="../../../public/icones/maisvistas-inativo.png" 
          >
            Mais vistas
          </ItemNavegacao>

          <ItemNavegacao 
            iconeAtivo="../../../public/icones/maiscurtidas-ativo.png" 
            iconeInativo="../../../public/icones/maiscurtidas-inativo.png" 
          >
            Mais curtidas
          </ItemNavegacao>

          <ItemNavegacao 
            iconeAtivo="../../../public/icones/novas-ativo.png" 
            iconeInativo="../../../public/icones/novas-inativo.png" 
          >
            Novas
          </ItemNavegacao>

          <ItemNavegacao 
            iconeAtivo="../../../public/icones/surpreenda-me-ativo.png" 
            iconeInativo="../../../public/icones/surpreenda-me-inativo.png" 
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
