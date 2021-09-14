import { Repository } from "./repository";

export class Object {
    repo;

    constructor(repo: Repository, data = null) {
        this.repo = repo

        if (data) this.deserialize(data)
    }

    public serialize = () => {

    }
    
    public deserialize = (data: string) => {
        
    }
}