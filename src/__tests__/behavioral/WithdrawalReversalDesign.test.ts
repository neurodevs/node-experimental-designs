import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'
import WithdrawalReversalDesignImpl, {
    WithdrawalReversalDesign,
} from './WithdrawalReversalDesign'

export default class WithdrawalReversalDesignTest extends AbstractSpruceTest {
    private static instance: WithdrawalReversalDesign

    protected static async beforeEach() {
        await super.beforeEach()
        this.instance = this.WithdrawalReversalDesign()
    }

    @test()
    protected static async canCreateWithdrawalReversalDesign() {
        assert.isTruthy(this.instance)
    }

    private static WithdrawalReversalDesign() {
        return WithdrawalReversalDesignImpl.Create()
    }
}
