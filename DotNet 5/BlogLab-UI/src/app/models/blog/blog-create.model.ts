export class BlogCreate {

    constructor(
        public blogId: number,
        public title: string,
        public content: string,
        public photoId?: number
    ) {}

}