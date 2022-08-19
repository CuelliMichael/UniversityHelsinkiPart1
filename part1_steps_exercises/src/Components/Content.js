import { Part } from './Part';

export const Content = ({parts}) => {

    return (
        <div>
            {
            parts? 
                parts.map(
                    (item, i) => <Part key={`part${i}`} part={item.name} exercises={item.exercises} />
                )
            :
            <></>
            }
        </div>
    )
}