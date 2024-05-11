import { isWhite } from '../../Util';
import styles from './index.module.css';

const Chessboard = () => {
    const chessPieces: { readonly [key: string]: string } = {
        R: '♜',
        N: '♞',
        B: '♝',
        Q: '♛',
        K: '♚',
        P: '♟',
        r: '♖',
        n: '♘',
        b: '♗',
        q: '♕',
        k: '♔',
        p: '♙',
        ' ': ' ',
      };
    
      const boardRows =
        'RNBQKBNR' + 'PPPPPPPP' + '        ' + '        ' + '        ' + '        ' + 'pppppppp' + 'rnbqkbnr';
    return (
        <div className={styles.board}>
            {boardRows.split('').map((board: string, i: number) => {
                return(
                    <div key = {i} className={isWhite(i)? styles.white: styles.black}>
                        {chessPieces[board]}
                    </div>
                )
            })}
        </div>
    )
}

export default Chessboard;