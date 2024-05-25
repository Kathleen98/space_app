import styled from 'styled-components';
import tags from './tags.json';


const ContainerTags = styled.ul`
    display: flex;
    align-items: center;
    gap: 25px;
`

const ListaEstilizada = styled.li`
    list-style-type: none;
    display: flex;
    gap: 24px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    font-weight: 400;
`

const Botao = styled.button`
    padding: 10px 8px;
    height: 49px;
    background: rgba(217, 217, 217, 0.3);
    color: #FFF;
    border-radius: 10px;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
    transition: background-color 0.3s ease;
    font-size: 24px;
    font-weight:400;
    line-height: 28.8px;
    cursor: pointer;
`

const Tags = (ativo=false) =>{
    return<ContainerTags>
        <TagTitulo>
            Busque por tags:
        </TagTitulo>
        <ListaEstilizada>
            {tags.map(tag => <Botao $ativo={ativo} key={tag.id}>{tag.titulo}</Botao>)}
        </ListaEstilizada>  

    </ContainerTags>
        
}

export default Tags