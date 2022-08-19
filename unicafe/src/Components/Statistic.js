

export const StatisticLine = ({ name, value, charSymbol }) => {

    return (
        <tr>
            <td>{name}</td>
            <td>
                {
                    ` ${isNaN(value) ? "..." : value} ${isNaN(value) || typeof charSymbol === 'undefined'
                        ? "" : charSymbol
                    }`
                }
            </td>

        </tr>
    );
}