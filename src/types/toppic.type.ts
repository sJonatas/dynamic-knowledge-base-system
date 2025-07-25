
type topic = {
    id: number,
    name: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    version: number,
    parentTopicId?: number,
}

export default topic;