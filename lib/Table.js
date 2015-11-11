import React from 'react';
import styles from './Table.scss';

export class Table extends React.Component {
    render () {
        return <table className={styles.root}>
            <tbody>
            <tr><td><div>1</div></td><td>2</td></tr>
            <tr><td>3</td><td>4</td></tr>
            </tbody>
        </table>;
    }
}



