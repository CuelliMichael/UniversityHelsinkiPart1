import { Button } from './Button';

export const FeedbackButtons = ({onGood, onNeutral, onBad}) => {

    return(
        <div>
            <Button name="good" onClick={onGood} />
            <Button name="neutral" onClick={onNeutral} />
            <Button name="bad" onClick={onBad} />
        </div>
    )
}