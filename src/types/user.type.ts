
import UserRole from "..//enums/user-role.enum";

type user = {
    id: number,
    name: string,
    email: string,
    role: UserRole,
    createdAt?: Date,
}

export default user;