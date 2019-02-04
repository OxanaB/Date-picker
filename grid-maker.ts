export function getGridsStartAndFinishPoints(date: Date) {
    const today = new Date(date);
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const deltaFirst = firstDayOfMonth.getDay();
    const firstDayOnTheGrid = new Date(year, month, 2 - deltaFirst);

    const lastDayOfMonth = new Date(year, month + 1, 0);
    const deltaLast = 7 - lastDayOfMonth.getDay();
    const lastDayOnTheGrid = new Date(year, month + 1, 0 + deltaLast);
    return { firstDayOnTheGrid, lastDayOnTheGrid };
}


export function makeGrid(firstDayOnTheGrid: Date, lastDayOnTheGrid: Date): Date[][] {
    const result: Date[][] = [];
    for (let weekIndex = 0; true; weekIndex++) {
        const week: Date[] = [];
        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const gridFirstYear = firstDayOnTheGrid.getFullYear();
            const gridFirstMonth = firstDayOnTheGrid.getMonth();
            const gridFirstDate = firstDayOnTheGrid.getDate();
            const dateDelta = weekIndex * 7 + dayIndex;
            const date = new Date(gridFirstYear, gridFirstMonth, gridFirstDate + dateDelta);
            week.push(date);
            // check double if
            if (lastDayOnTheGrid.getDate() === 31 || date.getTime() === lastDayOnTheGrid.getTime()) {
                result.push(week);
                return result;
            }
        }
        result.push(week);
    }
}
