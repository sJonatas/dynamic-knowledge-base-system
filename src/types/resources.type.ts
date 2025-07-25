import ResourceType from "../enums/resource.enum";

type resource = {
    id?: number,
    topicId: number,
    url: string,
    description: string,
    type: ResourceType,
    createdAt: Date,
    updatedAt: Date,    
}

export default resource;