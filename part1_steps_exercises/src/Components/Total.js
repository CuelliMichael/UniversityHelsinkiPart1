

export const Total = ({parts}) => {

    return(
        <>
            <p>Number of exercises {parts && parts.reduce((total,item) => total + item.exercises,0)}</p>
        </>
    );
}