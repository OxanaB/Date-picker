export interface DiveRequest {
    id: number | undefined,
    name: string,
    email: string,
    telephone: string,
    diveLevel: string[],
    arrivalDate: Date | null,
    hotel: string,
    message: string,
}
export const diveRequests: DiveRequest[] = [];
