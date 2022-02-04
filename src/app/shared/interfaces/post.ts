export interface Post {
    _id?: string|undefined,
    authorId?: {
        firstName: string,
        lastName: string
    },
    tags: string[],
    datePost: string | Date,
    title: string,
    description: string,
    textarea: string,
    countLikes: number
}
