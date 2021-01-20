import React from 'react'

const ranking = [
    {
        _id: '1',
        nickname: 'Manuelin',
        position: '1',
        time: '5'
    },
    {
        _id: '2',
        nickname: 'Fulanito',
        position: '2',
        time: '8'
    },
    {
        _id: '3',
        nickname: 'Diegote',
        position: '3',
        time: '9'
    },
    {
        _id: '4',
        nickname: 'Angelito',
        position: '4',
        time: '15'
    },
    {
        _id: '5',
        nickname: 'Pedrito',
        position: '5',
        time: '18'
    }
]

export const Ranking = () => {

    const listRanking = ranking.map((rank, index) => {

        let positionElement = '';

        switch (index) {
            case 0:
                positionElement = <img src="./assets/icons/1st.svg" width="31px" alt="home" />
                break;
            case 1:
                positionElement = <img src="./assets/icons/2nd.svg" width="31px" alt="home" />
                break;
            case 2:
                positionElement = <img src="./assets/icons/3rd.svg" width="31px" alt="home" />
                break;
            default:
                positionElement = <span className="mx-2">{rank.position}°</span>
                break;
        }

        return <tr key={rank._id}>
            <th>
                {positionElement}
            </th>
            <td><span>{rank.nickname}</span></td>
            <td><span>{rank.time}s</span></td>
        </tr>
    });

    return (
        <div>
            <h1>Tabla de posiciones</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Posición</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tiempo</th>
                    </tr>
                </thead>
                <tbody>
                    {listRanking}
                </tbody>
            </table>
        </div>
    )
}