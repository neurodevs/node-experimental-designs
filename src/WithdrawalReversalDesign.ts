import { assertOptions } from '@sprucelabs/schema'
import { DesignPhases } from './types'

export default class WithdrawalReversalDesignImpl
    implements WithdrawalReversalDesign
{
    public static Class?: WithdrawalReversalDesignConstructor

    protected constructor() {}

    public static Create(phases: DesignPhases) {
        assertOptions({ phases }, ['phases'])
        return new (this.Class ?? this)()
    }
}

export interface WithdrawalReversalDesign {}

export type WithdrawalReversalDesignConstructor =
    new () => WithdrawalReversalDesign
