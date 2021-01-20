import React from 'react'
import styled from 'styled-components'

const categories = [
    {
        _id: '1',
        name: 'Tecnología',
        description: 'Texto descriptivo acerca de la categoría.',
        img: 'https://i.pinimg.com/originals/19/c9/d7/19c9d7ebe62182001493d1e09df7295f.jpg'
    },
    {
        _id: '2',
        name: 'Ciencia',
        description: 'Texto descriptivo acerca de la categoría.',
        img: 'https://i.pinimg.com/originals/74/f2/fb/74f2fba4ea1424bb270d6e5bf1887369.jpg'
    },
    {
        _id: '3',
        name: 'Arte',
        description: 'Texto descriptivo acerca de la categoría.',
        img: 'https://fondosmil.com/fondo/611.jpg'
    },
    {
        _id: '4',
        name: 'League of legends',
        description: 'Texto descriptivo acerca de la categoría.',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ae781ff-90ab-4ce6-8354-24d7ecbb78a4/dak9q7n-8f73a33e-e290-4792-9f37-11d014ca2e14.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNGFlNzgxZmYtOTBhYi00Y2U2LTgzNTQtMjRkN2VjYmI3OGE0XC9kYWs5cTduLThmNzNhMzNlLWUyOTAtNDc5Mi05ZjM3LTExZDAxNGNhMmUxNC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.417ogAMItkgxEX9jNm8RR29qkDtMV3n6yziMZbpNOVA'
    },
    {
        _id: '5',
        name: 'Futbol',
        description: 'Texto descriptivo acerca de la categoría.',
        img: 'https://i.pinimg.com/originals/a9/88/a4/a988a47e605cacc02b0bb41c85270de3.jpg'
    },
    {
        _id: '6',
        name: 'Autos',
        description: 'Texto descriptivo acerca de la categoría.',
        img: 'https://i.pinimg.com/originals/ee/3f/71/ee3f71acb21e0c2f7bc19a0e57138287.png'
    },
    {
        _id: '7',
        name: 'Anime',
        description: 'Texto descriptivo acerca de la categoría.',
        img: 'https://wwwhatsnew.com/wp-content/uploads/2020/01/Los-mejores-sitios-web-para-aficionados-al-anime-1.jpg'
    },
    {
        _id: '8',
        name: 'Computadoras',
        description: 'Texto descriptivo acerca de la categoría.',
        img: 'https://wallpapercave.com/wp/wp3365340.jpg'
    }
]

const CategoryButton = styled.button`
    background-color: transparent;
    margin-bottom: 10px;
    border: none;

    &:hover {
        color: #5b3c8a;
        font-weight: 600;
    }
`

const CategoryDescription = styled.p`
    display: block;
    width: auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const CategoriesPanel = ({category, setCategory, selected, setSelected}) => {

    const getCategory = (id) => {
        return categories.find((cat) => cat._id === id);
    }
    
    const handleClick = (e) => {
        const catId = e.target.value;
        const selectedCategory = getCategory(catId);

        setCategory(selectedCategory);
        setSelected(true);

        console.log(selectedCategory);
    }

    const listCategories = categories.map((cat) =>
        <li key={cat._id} className="col mb-4">
            <div className="card shadow">
                <img src={cat.img} className="card-img-top" alt={cat.name} />
                <div className="card-body">
                    <h5 className="card-title"> {cat.name}</h5>
                    <CategoryDescription className="card-text">{cat.description}</CategoryDescription>
                </div>
                <hr className="mx-3 my-2"/>
                <CategoryButton value={cat._id} onClick={(e) => handleClick(e)}> Seleccionar </CategoryButton>
            </div>
        </li>
    )

    return (
        <>
            {selected !== true ?
                <div className="mt-5">
                    <ul className="row row-cols-1 row-cols-md-3 p-0 m-0">
                        {listCategories}
                    </ul>
                </div>
            :
                null
            }
        </>
    )
}