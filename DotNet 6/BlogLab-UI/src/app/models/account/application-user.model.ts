export class ApplicationUser {

    constructor(
        public applicationUserId: number,
        public username: string,
        public fullname: string,
        public email: string,
        public token: string
    ) {}

}