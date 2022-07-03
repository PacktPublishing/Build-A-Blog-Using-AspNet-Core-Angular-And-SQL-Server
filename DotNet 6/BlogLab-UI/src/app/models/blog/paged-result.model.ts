export class PagedResult<T> {
    constructor(
        public items: Array<T>,
        public totalCount: number
    ) {}
}