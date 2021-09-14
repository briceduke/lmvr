export class Blob {
    fmt = 'blob'
    blobdata: unknown;

    public serialize = () => {
        return this.blobdata
    }

    public deserialize = (data: unknown) => {
        this.blobdata = data
    }
}