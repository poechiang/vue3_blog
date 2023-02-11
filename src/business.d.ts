declare interface IArticle {
    id: string;
    _id: string;
    catagory?: string;
    title?: string;
    content?: string;
    tags?: string[];

    createdAt?: Date | string;

    modifyAt?: Date | string;

    draft?: boolean;

    state?: number = 1;
}
