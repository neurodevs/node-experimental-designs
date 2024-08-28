import { assertOptions } from '@sprucelabs/schema'
import { Phases } from './types'

export default class WithdrawalReversalDesignImpl
    implements WithdrawalReversalDesign
{
    public static Class?: WithdrawalReversalDesignConstructor

    protected constructor() {}

    public static Create(phases: Phases) {
        assertOptions({ phases }, ['phases'])
        return new (this.Class ?? this)()
    }
}

export interface WithdrawalReversalDesign {}

export type WithdrawalReversalDesignConstructor =
    new () => WithdrawalReversalDesign
