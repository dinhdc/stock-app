export function formatMoney(num, tag) {
    return (
        num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +
        `${tag !== undefined ? ` ${tag}` : ' VND'}`
    );
}
