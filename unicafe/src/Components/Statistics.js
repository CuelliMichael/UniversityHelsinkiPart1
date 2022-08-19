import { StatisticLine } from './Statistic';

export const Statistics = ({ good, bad, neutral }) => {

    const all = bad + good + neutral;

    return (
        <table>
            <tbody>
                <StatisticLine name={'good'} value={good} />
                <StatisticLine name={'neutral'} value={neutral} />
                <StatisticLine name={'bad'} value={bad} />
                <StatisticLine name={'all'} value={all} />
                <StatisticLine name={'average'} value={(good - bad) / all} />
                <StatisticLine name={'positive'} value={(good / all) * 100} charSymbol={'%'} />
            </tbody>
        </table>
    )
}