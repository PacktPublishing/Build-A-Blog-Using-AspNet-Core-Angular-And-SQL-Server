export class Photo {

    constructor(
        public photoId: number,
        public applicationUserId: number,
        public imageUrl: string,
        public publicId: string,
        public description: string,
        public publishDate: Date,
        public updateDate: Date,
        public deleteConfirm: boolean = false
    ) {}

}