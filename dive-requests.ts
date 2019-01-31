export interface DiveRequest {
    name: string,
    email: string,
    telephone: string,
    diveLevel: string,
    arrivalDate: Date | null,
    hotel: string,
    message: string,
}
export const newDiveRequest: DiveRequest [] = []