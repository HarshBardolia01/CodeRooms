export enum Roles {
    ADMIN = "Admin",
    USER = "User",
    MEMBER = "Member"
};

export class UserDto {
    email: string = "";
    firstName: string = "";
    lastName: string = "";
    city: string = "";
    country: string = "";
    organization: string = "";
    friendOfCount: number = 0;
    avatar: string = "";
    about: string = "";
    coverPhoto: string = "";
    twitterLink: string = "";
    linkedinLink: string = "";
    website: string = "";

    constructor(obj: any) {
        this.email = obj && obj.email ? obj.email : "";
        this.firstName = obj && obj.firstName ? obj.firstName : "";
        this.lastName = obj && obj.lastName ? obj.lastName : "";
        this.city = obj && obj.city ? obj.city : "";
        this.country = obj && obj.country ? obj.country : "";
        this.organization = obj && obj.organization ? obj.organization : "";
        this.friendOfCount = obj && obj.friendOfCount ? obj.friendOfCount : "";
        this.avatar = obj && obj.avatar ? obj.avatar : "";
        this.about = obj && obj.about ? obj.about : "";
        this.website = obj && obj.website ? obj.website : "";
        this.coverPhoto = obj && obj.coverPhoto ? obj.coverPhoto : "";
        this.twitterLink = obj && obj.twitterLink ? obj.twitterLink : "";
        this.linkedinLink = obj && obj.linkedinLink ? obj.linkedinLink : "";
    }
};