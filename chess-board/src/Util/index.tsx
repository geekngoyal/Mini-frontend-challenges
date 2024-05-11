

export const isWhite = (i: number) => {
    const isEvenRow = Math.floor(i / 8) % 2 === 0;
    const isEvenTile = i % 2 === 0;

    if((isEvenRow && isEvenTile) || (!isEvenTile && !isEvenRow)) {
        return true;
    }
    return false;
}