export default class WithdrawalReversalDesignImpl
    implements WithdrawalReversalDesign
{
    public static Class?: WithdrawalReversalDesignConstructor

    protected constructor() {}

    public static Create() {
        return new (this.Class ?? this)()
    }
}

export interface WithdrawalReversalDesign {}

export type WithdrawalReversalDesignConstructor =
    new () => WithdrawalReversalDesign
