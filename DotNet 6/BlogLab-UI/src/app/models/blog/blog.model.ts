export class Blog {

    constructor(
        public blogId: number,
        public title: string,
        public content: string,
        public applicationUserId: number,
        public username: string,
        public publishDate: Date,
        public updateDate: Date,
        public deleteConfirm: boolean = false,
        public photoId?: number
    ) {}

}