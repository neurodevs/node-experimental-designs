export type DesignPhases = Phase[]

export interface Phase {
    name: string
    biometrics: Biometric[]
}

export interface Biometric {
    name: string
    average: number
}
