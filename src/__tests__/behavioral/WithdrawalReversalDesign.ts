import { assertOptions } from '@sprucelabs/schema'

export default class WithdrawalReversalDesignImpl
    implements WithdrawalReversalDesign
{
    public static Class?: WithdrawalReversalDesignConstructor

    protected constructor() {}

    public static Create(phases: PhaseMatrix) {
        assertOptions({ phases }, ['phases'])
        return new (this.Class ?? this)()
    }
}

export interface WithdrawalReversalDesign {}

export type WithdrawalReversalDesignConstructor =
    new () => WithdrawalReversalDesign

export type PhaseMatrix = PhaseBiometrics[]

export interface PhaseBiometrics {}
